import { describe, it, expect } from 'vitest'

import Generator from './generator.ts'

describe('Generator', () => {
  it('should create a generator with the given locale', () => {
    const generator = new Generator('en')

    expect(generator.locale).toBe('en')
  })

  it('should get the next question', () => {
    const generator = new Generator('en')

    const previousQuestionId = ''

    const nextQuestion = generator.getNextQuestion(previousQuestionId)

    expect(nextQuestion).toEqual({
      id: 'Q1',
      type: 'text',
      ask: 'What is the name of your product?',
      placeholder: 'e.g. N fertiliser Ultra',
      help: 'This is the name of the product.',
      options: null
    })
  })

  it('should get the technical documentation', () => {
    const generator = new Generator('en')

    const technicalDocumentation = generator.getTechnicalDocumentation()

    expect(technicalDocumentation).toEqual({
      locale: 'en',
      fprVersion: 'FPR 2019/1009'
    })
  })
})
