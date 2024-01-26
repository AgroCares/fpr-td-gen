import type { localesType, idType, questionType, fprVersionType, technicalDocumentationType, pfcType, cmcType } from './shared.types'

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
  previousQuestionId: idType = undefined
  constructor (locale: localesType) {
    this.locale = locale
    this.fprVersion = 'FPR 2019/1009'
    this.pfcDesignation = undefined
    this.cmcDesignation = undefined
  }

  /** Returns the next question
   * @returns The question object {@link questionType} for the next question
   * @alpha
   */
  getNextQuestion (): questionType {
  /*  const nextQuestionId = this.identifyNextQuestion(this.previousQuestionId, this.pfcDesignation, this.cmcDesignation) */
    const nextQuestionId = this.identifyNextQuestion()
    const nextQuestion = new Question(this.locale, nextQuestionId).getQuestion()
    this.previousQuestionId = nextQuestionId
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

  /** identifyNextQuestion (previousQuestionId: idType, pfcDesignation: pfcType, cmcDesignation: cmcType): idType \{
    previousQuestionId = this.previousQuestionId
    let nextQuestionId: idType
    if (previousQuestionId === undefined) \{
      nextQuestionId = 'Q1'
    \} else if (previousQuestionId === 'Q1') \{
      nextQuestionId = 'Q2'
    \} else if (previousQuestionId === 'Q2') \{
      if (pfcDesignation !== 'PFC 7') \{
        nextQuestionId = 'Q3'
      \} else \{
        nextQuestionId = 'Q7'
      \}
    \} else if (previousQuestionId === 'Q7') \{
      nextQuestionId = 'Q7.1'
    \} else if (previousQuestionId === 'Q3') \{
      nextQuestionId = 'Q4'
    \} else if (previousQuestionId === 'Q4') \{
      if (cmcDesignation !== undefined && cmcDesignation.includes('PFC 1')) \{
        nextQuestionId = 'Q5.1'
      \} else if (cmcDesignation !== undefined && (cmcDesignation.includes('CMC 3') || cmcDesignation.includes('CMC 5') || cmcDesignation.includes('CMC 11'))) \{
        nextQuestionId = 'Q5.2'
      \}
    \} else if (previousQuestionId === 'Q5.1' || previousQuestionId === 'Q5.2' || previousQuestionId === 'Q7.1') \{
      nextQuestionId = 'END'
    \} else \{
      throw new Error('Generator does not know the next question')
    \}
    return nextQuestionId
  \} */
}
export default Generator
