import { describe, it, expect } from 'vitest'
import { Question } from './question'

describe('Question', () => {
  it('should create an instance', () => {
    const question = new Question('id', 'text', 'ask', [])
    expect(question).toBeDefined()
  })

  it('should have the correct id', () => {
    const question = new Question('id', 'text', 'ask', [])
    expect(question.id).toEqual('id')
  })

  it('should have the correct type', () => {
    const question = new Question('id', 'text', 'ask', [])
    expect(question.type).toEqual('text')
  })

  it('should have the correct ask', () => {
    const question = new Question('id', 'text', 'ask', [])
    expect(question.ask).toEqual('ask')
  })

  it('should have the correct placeholder', () => {
    const question = new Question('id', 'text', 'ask', [])
    expect(question.placeholder).toEqual('')
  })

  it('should have the correct help', () => {
    const question = new Question('id', 'text', 'ask', [])
    expect(question.help).toEqual('')
  })

  it('should have the correct options', () => {
    const question = new Question('id', 'text', 'ask', [])
    expect(question.options).toEqual([])
  })
})
