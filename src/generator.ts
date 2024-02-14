import type { localesType, idType, questionType, fprVersionType, technicalDocumentationType, pfcType, answerSet, answerType } from './shared.types'

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
  fprVersion: fprVersionType = 'FPR 2019/1009'
  pfcDesignation: pfcType = undefined
  allAnswers: answerSet
  nrOfComponents: number
  lastKeyComponentNr: number
  constructor (locale: localesType) {
    this.locale = locale
    this.fprVersion = 'FPR 2019/1009'
    this.pfcDesignation = undefined
    this.allAnswers = new Map<idType, answerType>()
    this.nrOfComponents = -999
    this.lastKeyComponentNr = -999
  }

  /** Returns the next question
   * @returns The question object {@link questionType} for the next question
   * @alpha
   */
  getNextQuestion (): questionType {
    const nextQuestionId = this.identifyNextQuestion()
    if (nextQuestionId === undefined) {
      throw new Error('unable to identify next question, please contact the maintainers')
    }
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
 * Helper function for {@link identifyNextQuestion}
 * @param questionToIterate - the component related question to iterate over for each component mentioned in question 3
 * @param questionWhenDone - the next question when the questionToIterate over has been answered for all components
 * @returns The id of the next question {@link idType}
 * @internal
 */
  iterateComponentQuestions (questionToIterate: idType, questionWhenDone: idType): string {
    /** setup */
    let nextQId: string
    const lastKey = [...this.allAnswers.keys()].pop()

    /** check how many components there are and the component nr of the last answered question */
    if (this.allAnswers.has('Q3')) {
      const listOfComponents = this.allAnswers.get('Q3')
      if (Array.isArray(listOfComponents)) {
        this.nrOfComponents = listOfComponents.length
        if (lastKey === undefined) {
          throw new Error('No last key found, please contact the maintainers while Q3 has been answered already.')
        } else {
          this.lastKeyComponentNr = parseInt(lastKey.split('-')[1])
        }
      }
    }

    /** decide whether the same question should be asked for the next component, or that this question has been answered for all components and that we should move to the next question, aka questionWhenDone */
    if (this.lastKeyComponentNr === undefined || this.nrOfComponents === undefined) {
      throw new Error('No component number is defined while question three has been answered, please contact the maintainers.')
    }
    if (this.lastKeyComponentNr === undefined || this.nrOfComponents === undefined) {
      throw new Error('No component number is defined while question three has been answered, please contact the maintainers.')
    } else if (this.lastKeyComponentNr < this.nrOfComponents) {
      nextQId = questionToIterate + '-' + (this.lastKeyComponentNr + 1)
    } else if (questionWhenDone === 'END') {
      nextQId = 'END'
    } else {
      nextQId = questionWhenDone + '-' + 1
    }
    return nextQId
  }

  /**
   * Check completeness of general product questions
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
   * Identify which of the general product level questions must be answered next
   * @param lastKey - the last key entered into the answer object {@link allAnswers}
   * @returns the id of the next question to be answered {@link idType}
   * @internal
   * @alpha
   */
  identifyNextQuestionProductLevel (lastKey: string | undefined): idType {
    let nextQId: idType = 'Q1'
    /** actual question ID identifying */
    if (this.fprVersion === 'FPR 2019/1009') {
      if (this.allAnswers.size === 0) {
        nextQId = 'Q1'
      } else if (lastKey === 'Q1') {
        nextQId = 'Q2'
      } else if (lastKey === 'Q2') {
        if (this.allAnswers.get('Q2') !== 'PFC 7') {
          nextQId = 'Q3'
        } else {
          nextQId = 'Q7'
        }
      }
    }
    return nextQId
  }

  /**
 * Identify the next question
 * @returns The id of the next question {@link idType}
 * @internal
 */
  identifyNextQuestion (): idType {
    /** setup variables and constants to be used in the function */
    let nextQId: idType = 'Q1'
    const lastKey = [...this.allAnswers.keys()].pop()

    /** actual question ID identifying */
    if (this.generalQuestionsIncommplete()) {
      nextQId = this.identifyNextQuestionProductLevel(lastKey)
    } else if (lastKey === 'Q3') {
      nextQId = 'Q4' + '-' + 1
    } else if (lastKey !== undefined) {
      if (lastKey.startsWith('Q4-')) {
        nextQId = this.iterateComponentQuestions('Q4', 'Q5.1')
      } else if (lastKey.startsWith('Q5.1-')) {
        nextQId = this.iterateComponentQuestions('Q5.1', 'Q5.2')
      } else if (lastKey.startsWith('Q5.2-')) {
        nextQId = this.iterateComponentQuestions('Q5.2', 'END')
      }
    } else if (lastKey === 'Q7') { /** Questioning on products of PFC 7 is not implemented and tested yet */
      nextQId = 'Q7.1'
    } else if (lastKey === 'Q7.1') {
      nextQId = 'END'
    } else {
      throw new Error('No next questionId point or END found, please contact the maintainers, lastKey: ' + lastKey + '')
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
