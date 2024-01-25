import type { localesType, idType, questionType, fprVersionType, technicalDocumentationType } from './shared.types'

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
  constructor (locale: localesType) {
    this.locale = locale
    this.fprVersion = 'FPR 2019/1009'
  }

  /** Returns the next question
   * @returns The question object {@link questionType} for the next question
   * @alpha
   */
  getNextQuestion (previousQuestionId): questionType {
    const nextQuestionId = this.identifyNextQuestion(previousQuestionId)
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
      fprVersion: this.fprVersion
    }
  }

  /**
   * Identify the next question
   * @returns The id of the next question {@link idType}
   * @internal
   */
  identifyNextQuestion (previousQuestionId = ''): idType {
    let nextQuestionId: idType = ''
    if (previousQuestionId === '') {
      nextQuestionId = 'Q1'
    } else if (previousQuestionId === 'Q1') {
      nextQuestionId = 'Q2'
    } else if (previousQuestionId === 'Q2') {
      nextQuestionId = 'Q3'
    } else {
      alert('Generator does not know the next question')
    }
    return nextQuestionId
  }
}

export default Generator
