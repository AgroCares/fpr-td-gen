import type { localesType, idType, questionType, fprVersionType, technicalDocumentationType, pfcType, cmcType, answerSet, answerType } from './shared.types'

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
  cmcDesignation: cmcType = undefined
  allAnswers: answerSet
  constructor (locale: localesType) {
    this.locale = locale
    this.fprVersion = 'FPR 2019/1009'
    this.pfcDesignation = undefined
    this.cmcDesignation = undefined
    this.allAnswers = new Map<idType, answerType>()
  }

  /** Returns the next question
   * @returns The question object {@link questionType} for the next question
   * @alpha
   */
  getNextQuestion (): questionType {
    const nextQuestionId = this.identifyNextQuestion()
    const nextQuestion = new Question(this.locale, nextQuestionId).getQuestion()
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
   * Identify the next question
   * @returns The id of the next question {@link idType}
   * @internal
   */
  identifyNextQuestion (): idType {
    return 'Q1' /* Mockup implementation, actual implementation will follow in later PR */
  }

  /**
 * Asks the user a question and returns the answer.
 *
 * The question is generated based on the current state of the generator.
 *
 * @returns The answer to the question.
 * @alpha
 */
  askQuestion (): answerType {
    const theAnswer: answerType = 'My productname'

    return theAnswer
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
    const question = new Question('en', this.identifyNextQuestion())
    if (question.question.type === 'text') {
      if (typeof answer !== 'string') {
        return false
      }
    } else if (question.question.type === 'multitext') {
      if (!Array.isArray(answer)) {
        return false
      }
    } else if (question.question.type === 'checkbox') {
      if (typeof answer !== 'boolean') {
        return false
      }
    } else if (question.question.type === 'select') {
      if (question.question.options === null) {
        return false
      }
      const options = question.question.options.map(x => x.value)
      if (typeof answer !== 'string') {
        return false
      } else if (!options.includes(answer)) {
        return false
      }
    }
    this.allAnswers.set(this.identifyNextQuestion(), answer)
    return true
  }
}
export default Generator
