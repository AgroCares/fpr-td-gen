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
  allAnswers!: answerSet
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

  askQuestion (): answerType {
    const theAnswer: answerType = 'My productname'

    return theAnswer
  }

  saveAnswer (answer: answerType): undefined {
    this.allAnswers.set(this.identifyNextQuestion(), answer)
  }
}
export default Generator
