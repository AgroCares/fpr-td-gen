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
  constructor (locale: localesType) {
    this.locale = locale
    this.fprVersion = 'FPR 2019/1009'
    this.pfcDesignation = undefined
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
    let nextQId: idType
    const lastKey = [...this.allAnswers.keys()].pop()
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
        nextQId = 'Q4'
      } else if (lastKey === 'Q4') {
        nextQId = 'Q5.1'
      } else if (lastKey === 'Q5.1') {
        nextQId = 'Q5.2'
      } else if (lastKey === 'Q7') {
        nextQId = 'Q7.1'
      } else if (lastKey === 'Q7.1' || lastKey === 'Q5.2') {
        nextQId = 'END'
      } else {
        throw new Error('No next questionId point or END found, please contact the maintainers, lastKey: ' + lastKey + '')
      }
    }
    return nextQId /* Mockup implementation, actual implementation will follow in later PR */
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
        throw new Error('Invalid answer, expected one of "' + options.join(', ') + '" but got "' + answer + '"')
      }
    }
    this.allAnswers.set(this.identifyNextQuestion(), answer)
    return true
  }
}
export default Generator
