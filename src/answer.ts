import type { questionType, answerType } from './shared.types'

export class Answer {
  questionId: questionType['id']
  answerValue: answerType

  constructor (questionId: questionType['id'], answerValue: answerType) {
    this.questionId = questionId
    this.answerValue = answerValue

    // Get answervalue for question with this question id

    this.answerValue = {
      questionId: this.questionId,
      answerValue: this.answerValue.answerValue
    }
  }

  getQuestion (): answerType {
    return this.answerValue
  }
}
