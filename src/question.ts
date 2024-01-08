import type { localesType, idType, questionType, questionSetType } from './shared.types'
import questionSets from './question_sets'

export class Question {
  locale: localesType
  id: idType
  questionSet: questionSetType
  question: questionType

  constructor (locale: localesType, id: idType) {
    this.locale = locale
    this.id = id

    // Get set from questionSets that has the id of this question
    const questionSet = questionSets.find(x => x.id === this.id)

    if (questionSet === undefined) {
      throw new Error(`Question with id ${this.id} not found`)
    } else {
      this.questionSet = questionSet
    }

    this.question = {
      id: this.id,
      type: this.questionSet.type,
      ask: this.questionSet.ask[this.locale],
      placeholder: null,
      help: this.questionSet.help[this.locale],
      options: null
    }

    if (this.questionSet.options !== null) {
      const options = this.questionSet.options.map(option => {
        return {
          value: option.value,
          label: option.locale[this.locale]
        }
      })
      this.question.options = options
    }

    if (this.questionSet.placeholder !== null) {
      this.question.placeholder = this.questionSet.placeholder[this.locale]
    }
  }

  getQuestion (): questionType {
    return this.question
  }
}
