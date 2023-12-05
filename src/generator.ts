import type { localesType, idType, questionType, fprVersionType, technicalDocumentationType } from './shared.types'

import { Question } from './question'

class Generator {
  locale: localesType
  fprVersion: fprVersionType = 'FPR 2019/1009'
  constructor (locale: localesType) {
    this.locale = locale
  }

  getNextQuestion (): questionType {
    const nextQuestionId = this.identifyNextQuestion()
    const nextQuestion = new Question(this.locale, nextQuestionId).getQuestion()
    return nextQuestion
  }

  getTechnicalDocumentation (): technicalDocumentationType {
    return {
      locale: this.locale,
      fprVersion: this.fprVersion
    }
  }

  // Internal functions
  identifyNextQuestion (): idType {
    const nextQuestionId = 'Q1'
    return nextQuestionId
  }
}

export default Generator
