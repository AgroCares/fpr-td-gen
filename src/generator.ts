import fs from 'node:fs'
import crypto from 'node:crypto'

import type { localesType, idType, questionType, fprVersionType, technicalDocumentationType, pfcType, answerSet, answerType, fprType, technicalDocumentationTaskListType, tasklistSetType } from './shared.types'

import fprVersionSets from './fprVersionSets'
import tasklistSets from './tasklist_sets'

import { Question } from './question'

class Generator {
  /**
  * Class of Generator to generate the Technical Documentation for a EU fertilizing product
  * @param locale - {@link localesType}
  * @param fprVersion - {@link fprVersionType}
  * @returns A Generator class with the functions {@link getNextQuestion} and {@link getTechnicalDocumentation}
  * @public
  */
  packageVersion = '1.1.4'
  locale: localesType
  fprVersion: fprVersionType
  pfcDesignation: pfcType = undefined
  allAnswers: answerSet
  nrOfComponents: number
  lastKeyComponentNr: number
  fprVersionSet: fprType | undefined
  generalProductQuestions: idType[]
  cmcQuestions: idType[]
  cmcAnswers: idType[] /** an ordered array where for each component, the question ids that are expected as answers are included */
  blendQuestions: idType[]
  constructor (locale: localesType, fprVersion: fprVersionType) {
    this.locale = locale
    this.fprVersion = fprVersion
    this.pfcDesignation = undefined
    this.allAnswers = new Map<idType, answerType>()
    this.nrOfComponents = -999
    this.lastKeyComponentNr = -999
    this.fprVersionSet = fprVersionSets.find(x => x.fprVersion === fprVersion)
    this.cmcAnswers = []

    if (this.fprVersionSet === undefined) {
      throw new Error('unable to identify fprVersionSet, please contact the maintainers')
    }
    this.generalProductQuestions = this.fprVersionSet.generalProductQuestions
    this.cmcQuestions = this.fprVersionSet.cmcQuestions
    this.blendQuestions = this.fprVersionSet.blendQuestions
  }

  /** Returns the next question
   * @returns The question object {@link questionType} for the next question
   * @public
   */
  getNextQuestion (): questionType {
    if (!this.allQuestionsAnswered()) {
      const nextQuestionId = this.identifyNextQuestion()
      const nextQuestion = new Question(this.locale, nextQuestionId.split('-')[0]).getQuestion()
      return nextQuestion
    } else {
      throw new Error('All questions have already been answered, no next question can be get')
    }
  }

  /** Returns the tecnhical documentation
   * @returns The technical documentation {@link technicalDocumentationType} object for the EU fertilizing product
   * @public
   */
  getTechnicalDocumentation (): technicalDocumentationType {
    return {
      locale: this.locale,
      fprVersion: this.fprVersion,
      pfcDesignation: this.pfcDesignation
    }
  }

  /**
   * Check if all questions have been answered
   * @returns true if all questions have been answered, else false
   * @public
   */
  allQuestionsAnswered (): boolean {
    let returnValue: boolean
    if (this.pfcDesignation === 'PFC 7') { // this is a hard stop for the PFC 7, meaning that no further questions will be asked once the pfcDesignation is set to PFC 7
      returnValue = true
    } else if (this.generalQuestionsComplete()) {
      if (this.allAnswers.has('Q3')) {
        if (this.cmcAnswers.length === 0) {
          returnValue = false
        } else if (this.cmcAnswers.every(cmcAnswer => this.allAnswers.has(cmcAnswer))) {
          returnValue = true
        } else {
          returnValue = false
        }
      } else {
        throw new Error('General questions have been answered, the product is not a PFC 7 blend and yet, no component names have been given in Q3')
      }
    } else {
      returnValue = false
    }
    return returnValue
  }

  /**
 * Get questionId for component questions
 *
 * Helper function for {@link identifyNextQuestion} finds the first component where not all {@link cmcQuestions} have been answered.
 * @returns The id of the next question {@link idType}
 * @internal
 */
  iterateComponentQuestions (): string {
    /** find first this.cmcAnswers not in this.allAnswers */
    const nextCmcQuestionId = this.cmcAnswers.find(cmcAnswer => !this.allAnswers.has(cmcAnswer))

    /** return the questionId consisting of cmcQuestionNextQ '-' componentNrNextQ */
    if (nextCmcQuestionId === undefined) {
      return 'cmcDONE'
    } else {
      return nextCmcQuestionId
    }
  }

  /**
   * Check completeness of general product questions
   *
   * A helper function to {@link identifyNextQuestion}
   *
   * If the general questions for a FPRversion have been answered, this function returns true.
   * @returns boolean
   * @internal
   */
  generalQuestionsComplete (): boolean {
    let returnValue: boolean
    if (this.generalProductQuestions.every(questionId => this.allAnswers.has(questionId))) {
      returnValue = true
    } else {
      returnValue = false
    }
    return returnValue
  }

  /**
 * Identify the next question
 * @returns The id of the next question {@link idType}
 * @internal
 */
  identifyNextQuestion (): idType {
    /** setup variables and constants to be used in the function */
    let nextQId: idType

    // check that that not all questions have been answered already
    if (this.allQuestionsAnswered()) {
      throw new Error('identifyNextQuestion is called whilst all questions have been answered.')
    }

    /** actual question ID identifying */
    if (!this.generalQuestionsComplete()) { /* Check whether all questions in generalProductQuestions have an answer in allAnswers */
      const generalProductQuestion = this.generalProductQuestions.find(questionId => !this.allAnswers.has(questionId))
      if (generalProductQuestion === undefined) {
        throw new Error('unable to identify generalProductQuestion, please contact the maintainers')
      }
      nextQId = generalProductQuestion /* if not, ask the first question in generalProductQuestions which is not in allAnswers */
    } else if (this.allAnswers.has('Q3')) {
      // If cmcAnswers has not been filled in yet, identify to which quesions we need answers
      if (this.cmcAnswers.length === 0) {
        const listOfComponents = this.allAnswers.get('Q3')
        if (Array.isArray(listOfComponents)) {
          this.nrOfComponents = listOfComponents.length
          const cmcNumbers = Array.from({ length: this.nrOfComponents }, (_, i) => i + 1)
          cmcNumbers.forEach(cmcNumber => {
            this.cmcQuestions.forEach(cmcQuestion => {
              this.cmcAnswers.push(`${cmcQuestion}-${cmcNumber}`)
            })
          })
        }
      }
      // find next CMC questionId
      nextQId = this.iterateComponentQuestions()
      if (nextQId === 'cmcDONE') {
        nextQId = 'END'
      }
    } else {
      nextQId = 'Q1'
    }
    return nextQId
  }

  /**
 * Saves the answer to the current question.
 *
 * The answer is stored in the `allAnswers` property of the generator.
 *
 * @param answer - The answer to the question of type {@link answerType}.
 * @returns `true` if the answer was successfully saved, and `false` otherwise.
 * @public
 */
  saveAnswer (answer: answerType): boolean {
    /**
     * validate the answer
     */
    const question = new Question('en', this.identifyNextQuestion().split('-')[0])
    if (question.question.type === 'text') {
      if (typeof answer !== 'string') {
        throw new Error('Answer is not of type "string" which is expected for question of type "text", the question is: ')
      }
    } else if (question.question.type === 'multitext') {
      if (!Array.isArray(answer)) {
        throw new Error('Answer is not an array which is expected for question of type "multitext"')
      } else {
        const arrayEntries = answer.map(x => typeof x)
        if (!arrayEntries.every(x => x === 'string')) {
          throw new Error('Answer is not an array of strings which is expected for question of type "multitext"')
        }
      }
    } else if (question.question.type === 'checkbox') {
      if (typeof answer !== 'boolean') {
        throw new Error('Answer is not of type "boolean" which is expected for question of type "checkbox"')
      }
    } else if (question.question.type === 'select') { /** check that a select question indeed has options */
      if (question.question.options === null) {
        throw new Error('Question has no options whilst this is required for question of type "select", if you see this error, something is wrong in the question definition.')
      }
      const options = question.question.options.map(x => x.value) /** retrieve the valid values */
      if (typeof answer !== 'string') {
        throw new Error('Invalid answer type for question ' + question.question.id + ', expected "string" but got "' + typeof answer + '"')
      } else if (!options.includes(answer)) {
        throw new Error('Invalid answer, expected one of "' + options.join(', ') + '" but got "' + answer + '" for question ' + question.question.id + '')
      }
    }
    this.allAnswers.set(this.identifyNextQuestion(), answer)
    if (answer === 'PFC 7') {
      this.pfcDesignation = 'PFC 7'
    }
    return true
  }

  /** Returns the things that need to be included in the technical documentation of a product
   * @returns The list of things that need to be included in the technical documentation of a product
   * @internal
   */
  getTechnicalDocumentationTaskList (): technicalDocumentationTaskListType {
    if (!this.allQuestionsAnswered()) {
      throw new Error('All questions must be answered before getting the technical documentation task list which does not seem to be true.')
    } else { // make the tasklist
      // add all general tasks to the tasklist
      const taskListGeneral = tasklistSets.filter(tasklistSet => tasklistSet.applicableTo.id === '').map(tasklistSet => {
        const theTaskDetails = (tasklistSet.taskDetails === null) ? null : tasklistSet.taskDetails[this.locale]
        const theTaskUrl = (tasklistSet.taskUrl === null) ? null : tasklistSet.taskUrl[this.locale]

        return {
          applicableElement: 'product',
          taskName: tasklistSet.taskName[this.locale],
          taskDetails: theTaskDetails,
          taskUrl: theTaskUrl
        }
      })

      const givenEachAnswerDoesThisTasklistSetApply = function (value: answerType, tasklistSet: tasklistSetType): boolean {
        let returnValue: boolean

        if (value === true) {
          returnValue = true
        } else if (value === false) {
          returnValue = false
        } else if (typeof value === 'string' || (Array.isArray(value) && value.every(element => typeof element === 'string'))) {
          if (Array.isArray(tasklistSet.applicableTo.answer)) {
            if (tasklistSet.applicableTo.answer.some(answer => value.includes(answer))) {
              returnValue = true
            } else {
              returnValue = false
            }
          } else if (tasklistSet.applicableTo.answer === value) {
            returnValue = true
          } else {
            returnValue = false
          }
        } else {
          throw new Error('Could not assert whether task: ' + tasklistSet.taskId + ' applies')
        }
        return returnValue
      }

      // add non-general tasks to the tasklist
      const taskListCmcs = Array.from(this.allAnswers.keys()).map(key => {
        const questionId = key.split('-')[0]
        const value = this.allAnswers.get(key)
        if (value === undefined) {
          throw new Error('The answer for question ' + questionId + ' is undefined.')
        }

        const taskListCmc = tasklistSets.filter(tasklistSet => tasklistSet.applicableTo.id === questionId)
          .filter(tasklistSet => givenEachAnswerDoesThisTasklistSetApply(value, tasklistSet))
          .map(tasklistSet => {
            const cmcNr = key.split('-')[1]

            const theTaskDetails = (tasklistSet.taskDetails === null) ? null : tasklistSet.taskDetails[this.locale]
            const theTaskUrl = (tasklistSet.taskUrl === null) ? null : tasklistSet.taskUrl[this.locale]

            return {
              applicableElement: (cmcNr !== '') ? cmcNr : 'product', // if cmcNr is not undefined or empty string, applicalbeElement is cmcNr else product
              taskName: tasklistSet.taskName[this.locale],
              taskDetails: theTaskDetails,
              taskUrl: theTaskUrl
            }
          })
        return taskListCmc.flat()
      }).flat()

      // concatenate the two tasklists
      const taskList = taskListGeneral.concat(taskListCmcs)
      return taskList
    }
  }

  /** Store the generator as JSON file
   * @param filePath - The file path for where to store the properties of the generator. Should have the extension ".json".
   * @returns A boolean to indicate if the file has been stored successfully
   * @public
   */
  saveToFile (filePath: string): boolean {
    // Check if filePath is actual json and can be stored
    if (!filePath.endsWith('.json')) {
      throw new Error('Filepath must be a json file.')
    }
    if (fs.existsSync(filePath)) {
      throw new Error('Filepath already exists.')
    }

    // Create object with all the information required for the generator
    const properties = {
      packageVersionversion: this.packageVersion,
      locale: this.locale,
      fprVersion: this.fprVersion,
      pfcDesignation: this.pfcDesignation,
      allAnswers: Object.fromEntries(this.allAnswers),
      nrOfComponents: this.nrOfComponents,
      lastKeyComponentNr: this.lastKeyComponentNr,
      fprVersionSet: this.fprVersionSet,
      cmcAnswers: this.cmcAnswers,
      generalProductQuestions: this.generalProductQuestions,
      mcQuestions: this.cmcQuestions,
      blendQuestions: this.blendQuestions
    }
    const propertiesHash = crypto.createHash('md5').update(JSON.stringify(properties)).digest('hex')
    const file = {
      properties,
      propertiesHash
    }

    // Store the file
    fs.writeFileSync(filePath, JSON.stringify(file), 'utf8')
    return true
  }
}
export default Generator
