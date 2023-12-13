import type { localesType, idType, questionType, fprVersionType, technicalDocumentationType } from './shared.types'

import { Question } from './question'

class Generator {
  /**
  * Class of generator to generate the Technical Documentation for a EU fertilizing product
  * @param locale - {@Link localeType}
  * @param fprVersion - {@Link fprVersionType}
  * @beta
  */
  locale: localesType
  fprVersion: fprVersionType = 'FPR 2019/1009'
  constructor (locale: localesType) {
    this.locale = locale
  }

  /** Returns the next question
   * @returns The question object for the next question
   * @beta
   */
  getNextQuestion (): questionType {
    const nextQuestionId = this.identifyNextQuestion()
    const nextQuestion = new Question(this.locale, nextQuestionId).getQuestion()
    return nextQuestion
  }

  /** Returns the tecnhical documentation
   * @returns The technical documentation object for the fertilizing product
   * @beta
   */
  getTechnicalDocumentation (): technicalDocumentationType {
    return {
      locale: this.locale,
      fprVersion: this.fprVersion
    }
  }

  /**
   * Identify the next question
   * @returns The id of the next question {@Link idType}
   * @internal
   */
  identifyNextQuestion (): idType {
    const nextQuestionId = 'Q1'
    return nextQuestionId
  }
}

export default Generator
