import { describe, it, expect } from 'vitest'

import Generator from './generator.ts'

describe('Generator', () => {
  it('should create a generator with the given locale', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    expect(generator.locale).toBe('en')
  })

  it('should ask the first question', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    const nextQuestion = generator.getNextQuestion()

    expect(nextQuestion).toEqual({
      id: 'Q1',
      type: 'text',
      ask: 'What is the name of your product?',
      placeholder: 'e.g. N fertiliser Ultra',
      help: 'This is the name of the product.',
      options: null
    })
  })
  it('should return property ask of the first question', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    const nextQuestion = generator.getNextQuestion()

    expect(nextQuestion.ask).toEqual(
      'What is the name of your product?'
    )
  })

  it('should identify the next question', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    expect(generator.identifyNextQuestion()).toEqual('Q1')
  })
  it('should store and answer to a question in allAnswers', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    generator.getNextQuestion()

    generator.saveAnswer('My productname')

    expect(generator.allAnswers.get('Q1')).toEqual('My productname')
  })

  it('should get the technical documentation', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    const technicalDocumentation = generator.getTechnicalDocumentation()

    expect(technicalDocumentation).toEqual({
      locale: 'en',
      fprVersion: 'FPR 2019/1009'
    })
  })

  it('should store the answers of a simple product with one component', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    generator.getNextQuestion()
    generator.saveAnswer('My productname')
    generator.getNextQuestion()
    generator.saveAnswer('PFC 2')
    generator.getNextQuestion()
    generator.saveAnswer(['calcium carbonate'])

    const nextQuestion = generator.identifyNextQuestion()
    expect(nextQuestion).toEqual('Q4-1')

    generator.saveAnswer('CMC 1')
    generator.getNextQuestion()
    generator.saveAnswer('Not applicable')
    generator.getNextQuestion()
    generator.saveAnswer(false)

    expect(generator.identifyNextQuestion()).toEqual('END')
  })

  it('should save answers of different types without throwing errors', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    generator.getNextQuestion()
    /* questionId == 'Q1', so answer.type must be text of value string */
    expect(generator.saveAnswer('My productname')).toBe(true)

    generator.getNextQuestion()
    /* questionId == 'Q2', so answer.type must be a string of a select number of values */
    expect(generator.saveAnswer('PFC 1.A.II')).toBe(true)

    generator.getNextQuestion()
    /* questionId == 'Q3', so answer.type must be a multitext e.g. an array of strings */
    expect(generator.saveAnswer(['Urea', 'biochar', 'another component material name'])).toBe(true)

    /** Urea */
    generator.getNextQuestion()
    /* questionId == 'Q4', so answer.type must be a string, */
    expect(generator.saveAnswer('CMC 1')).toBe(true)
    generator.getNextQuestion()
    /* questionId == 'Q5.1', so answer.type must be a boolean */
    expect(generator.saveAnswer('Not applicable')).toBe(true)
    generator.getNextQuestion()
    /* questionId == 'Q5.2', so answer.type must be a boolean */
    expect(generator.saveAnswer(false)).toBe(true)

    /** biochar */
    expect(generator.identifyNextQuestion()).toEqual('Q4-2')
    generator.getNextQuestion()
    /* questionId == 'Q4', so answer.type must be a string */
    expect(generator.saveAnswer('CMC 14')).toBe(true)
    generator.getNextQuestion()
    /* questionId == 'Q5.1', so answer.type must be a boolean */
    expect(generator.saveAnswer('Not applicable')).toBe(true)
    generator.getNextQuestion()
    /* questionId == 'Q5.2', so answer.type must be a boolean */
    expect(generator.saveAnswer(false)).toBe(true)

    /** another component material */
    generator.getNextQuestion()
    /* questionId == 'Q4', so answer.type must be a string */
    expect(generator.saveAnswer('CMC 2')).toBe(true)
    generator.getNextQuestion()
    expect(generator.saveAnswer('Not applicable')).toBe(true)
    generator.getNextQuestion()
    /* questionId == 'Q5.2', so answer.type must be a boolean */
    expect(generator.saveAnswer(false)).toBe(true)

    expect(generator.identifyNextQuestion()).toEqual('END')
  })
})
