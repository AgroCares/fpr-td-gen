import { describe, it, expect } from 'vitest'
import { Question } from './question'

describe('Question', () => {
  it('should create a question with the given locale and id', () => {
    const question = new Question('en', 'Q1')

    expect(question.locale).toBe('en')
    expect(question.id).toBe('Q1')
  })

  it('should get the question set for the given id', () => {
    const question = new Question('en', 'Q1')

    expect(question.question).toEqual({
      id: 'Q1',
      type: 'text',
      ask: 'What is the name of your product?',
      placeholder: 'e.g. N fertiliser Ultra',
      help: 'This is the name of the product.',
      options: null
    })
  })

  it('should get the question', () => {
    const question = new Question('en', 'Q1')

    expect(question.getQuestion()).toEqual({
      id: 'Q1',
      type: 'text',
      ask: 'What is the name of your product?',
      placeholder: 'e.g. N fertiliser Ultra',
      help: 'This is the name of the product.',
      options: null
    })
  })
})
