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

  /** Identify which component number was last dealt with if the component question has been answered */
  idPreviousComponent (): void {
    const lastKey = [...this.allAnswers.keys()].pop()
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
      } else if (lastKey === 'Q3') {
        nextQId = 'Q4' + '-' + 1
      } else if (lastKey !== undefined) {
        this.idPreviousComponent()
        if (lastKey.startsWith('Q4-')) {
          if (this.lastKeyComponentNr === undefined || this.nrOfComponents === undefined) {
            throw new Error('No component number is defined while question three has been answered, please contact the maintainers.')
          } else if (this.lastKeyComponentNr < this.nrOfComponents) {
            nextQId = 'Q4-' + (this.lastKeyComponentNr + 1)
          } else {
            nextQId = 'Q5.1' + '-' + 1
          }
        } else if (lastKey.startsWith('Q5.1-')) {
          this.idPreviousComponent()
          if (this.lastKeyComponentNr === undefined || this.nrOfComponents === undefined) {
            throw new Error('No component number is defined while question three has been answered, please contact the maintainers.')
          } else if (this.lastKeyComponentNr < this.nrOfComponents) {
            nextQId = 'Q5.1-' + (this.lastKeyComponentNr + 1)
          } else {
            nextQId = 'Q5.2' + '-' + 1
          }
        } else if (lastKey.startsWith('Q5.2-')) {
          if (this.lastKeyComponentNr === undefined || this.nrOfComponents === undefined) {
            throw new Error('No component number is defined while question three has been answered, please contact the maintainers.')
          } else if (this.lastKeyComponentNr < this.nrOfComponents) {
            nextQId = 'Q5.2-' + (this.lastKeyComponentNr + 1)
          } else {
            nextQId = 'END'
          }
        }
      } else if (lastKey === 'Q7') { /** Questioning on products of PFC 7 is not implemented and tested yet */
        nextQId = 'Q7.1'
      } else if (lastKey === 'Q7.1') {
        nextQId = 'END'
      } else {
        throw new Error('No next questionD point or END found, pleas contact the maintainers')
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
        throw new Error('Answer is not of type "string" which is expected for question of type "text", the question is: ' + question.question.id + '.')
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
