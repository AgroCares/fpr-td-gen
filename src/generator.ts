import type { localesType, idType, questionType, fprVersionType, technicalDocumentationType, pfcType, answerSet, answerType, fprType } from './shared.types'

import fprVersionSets from './fprVersionSets'

import { Question } from './question'

class Generator {
  /**
  * Class of Generator to generate the Technical Documentation for a EU fertilizing product
  * @param locale - {@link localesType}
  * @param fprVersion - {@link fprVersionType}
  * @returns A Generator class with the functions {@link getNextQuestion} and {@link getTechnicalDocumentation}
  * @alpha
  */
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
   * @alpha
   */
  getNextQuestion (): questionType {
    const nextQuestionId = this.identifyNextQuestion()
    const nextQuestion = new Question(this.locale, nextQuestionId.split('-')[0]).getQuestion()
    return nextQuestion
  }

  /** Returns the tecnhical documentation
   * @returns The technical documentation {@link technicalDocumentationType} object for the EU fertilizing product
   * @alpha
   */
  getTechnicalDocumentation (): technicalDocumentationType {
    return {
      locale: this.locale,
      fprVersion: this.fprVersion,
      pfcDesignation: this.pfcDesignation
    }
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
   * The general product questions include its name in Q1, PFC designation in Q2 and either a list of component names (Q3) or component product names (Q7)
   * If Q3 or Q7 has been answered, this question returns true.
   * @returns boolean
   * @internal
   * @alpha
   */
  generalQuestionsIncommplete (): boolean {
    let returnValue: boolean
    if (this.allAnswers.has('Q3') || this.allAnswers.has('Q7')) {
      returnValue = false
    } else {
      returnValue = true
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
    let nextQId: idType = 'Q1'

    /** actual question ID identifying */
    if (!this.generalProductQuestions.every(questionId => this.allAnswers.has(questionId))) { /* Check whether all questions in generalProductQuestions have an answer in allAnswers */
      nextQId = this.generalProductQuestions.filter(questionId => !this.allAnswers.has(questionId))[0] /* if not, ask the first question in generalProductQuestions which is not in allAnswers */
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
 * @alpha
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
    return true
  }
}
export default Generator
