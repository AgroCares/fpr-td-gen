import { describe, it, expect } from 'vitest'

import Generator from './generator.ts'

import { cmcDesginations, idTypes, pfcDesignations } from './shared.types'

describe('Generator', () => {
  it('should create a generator with the given locale', () => {
    const generator = new Generator('en')

    expect(generator.locale).toBe('en')
  })

  it('should ask the first question', () => {
    const generator = new Generator('en')

    generator.previousQuestionId = undefined

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

  it('should update the previous questionId', () => {
    const generator = new Generator('en')

    generator.previousQuestionId = undefined

    generator.getNextQuestion()

    expect(generator.previousQuestionId).toBe('Q1')

    /** Iterate one more time */
    generator.getNextQuestion()

    expect(generator.previousQuestionId).toBe('Q2')
  })

  describe('Generator', () => {
    it('should not throw an error for any combination of previousQuestionId, pfcDesgination, and cmcDesignation', () => {
      const generator = new Generator('en')
      const previousQuestionIds = idTypes
      const aPfcDesignation = pfcDesignations
      const aCmcDesignations = cmcDesginations
      for (const previousQuestionId of previousQuestionIds) {
        for (const pfcDesgination of aPfcDesignation) {
          for (const cmcDesignation of aCmcDesignations) {
            expect(() => generator.identifyNextQuestion(previousQuestionId, pfcDesgination, cmcDesignation)).not.toThrow()
          }
        }
      }
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
