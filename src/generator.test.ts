import fs from 'node:fs'
import { describe, it, expect } from 'vitest'

import Generator from './generator.ts'
import type { technicalDocumentationTask } from './shared.types.ts'
import { version } from '../package.json'

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
    expect(generator.identifyNextQuestion()).toEqual('Q3')
    generator.getNextQuestion()
    generator.saveAnswer(['calcium carbonate'])
    expect(generator.generalQuestionsComplete()).toBe(true)

    const nextQuestion = generator.identifyNextQuestion()
    expect(nextQuestion).toEqual('Q4-1')

    generator.saveAnswer('CMC 1')
    generator.getNextQuestion()
    generator.saveAnswer('Not applicable')
    generator.getNextQuestion()
    generator.saveAnswer(false)

    expect(generator.allQuestionsAnswered()).toBe(true)
  })

  it('should be able to ask the correct questions for a fertilising product blend (PFC 7), store the answers and return technical documentation', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    expect(generator.allQuestionsAnswered()).toBe(false)

    generator.getNextQuestion()
    generator.saveAnswer('My fertilsing product blend name')

    expect(generator.identifyNextQuestion()).toEqual('Q2')
    generator.getNextQuestion()
    generator.saveAnswer('PFC 7')
    expect(generator.allQuestionsAnswered()).toBe(true)

    // check that some PFC 7 tasks are given
    const taskList = generator.getTechnicalDocumentationTaskList()
    expect(taskList).toContainEqual(
      {
        applicableElement: undefined,
        taskDetails: null,
        taskName: 'The product must contain at least two CE marked fertilising products.',
        taskUrl: null
      }
    )
    expect(taskList).toContainEqual(
      {
        applicableElement: undefined,
        taskDetails: null,
        taskName: 'When the blend contains an inhibitor, the inhibitor is present in such a quantity that the blend meets the reduction thresholds set for inhibitors.',
        taskUrl: null
      }
    )
  })

  it('should save answers of different types without throwing errors', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    expect(generator.identifyNextQuestion()).toBe('Q1')
    generator.getNextQuestion()
    /* questionId == 'Q1', so answer.type must be text of value string */
    expect(generator.saveAnswer('My productname')).toBe(true)

    expect(generator.identifyNextQuestion()).toBe('Q2')
    generator.getNextQuestion()
    /* questionId == 'Q2', so answer.type must be a string of a select number of values */
    expect(generator.saveAnswer('PFC 1.A.II')).toBe(true)

    expect(generator.identifyNextQuestion()).toBe('Q3')
    generator.getNextQuestion()
    /* questionId == 'Q3', so answer.type must be a multitext e.g. an array of strings */
    expect(generator.saveAnswer(['Urea', 'biochar', 'another component material name'])).toBe(true)

    /** Urea */
    expect(generator.identifyNextQuestion()).toBe('Q4-1')
    generator.getNextQuestion()
    /* questionId == 'Q4', so answer.type must be a string, */
    expect(generator.saveAnswer('CMC 1')).toBe(true)
    expect(generator.identifyNextQuestion()).toBe('Q5.1-1')
    generator.getNextQuestion()
    /* questionId == 'Q5.1', so answer.type must be a boolean */
    expect(generator.saveAnswer('Not applicable')).toBe(true)
    expect(generator.identifyNextQuestion()).toBe('Q5.2-1')
    generator.getNextQuestion()
    /* questionId == 'Q5.2', so answer.type must be a boolean */
    expect(generator.saveAnswer(false)).toBe(true)

    /** biochar */
    expect(generator.identifyNextQuestion()).toEqual('Q4-2')
    generator.getNextQuestion()
    /* questionId == 'Q4', so answer.type must be a string */
    expect(generator.saveAnswer('CMC 14')).toBe(true)
    expect(generator.identifyNextQuestion()).toBe('Q5.1-2')
    generator.getNextQuestion()
    /* questionId == 'Q5.1', so answer.type must be a boolean */
    expect(generator.saveAnswer('Not applicable')).toBe(true)
    expect(generator.identifyNextQuestion()).toBe('Q5.2-2')
    generator.getNextQuestion()
    /* questionId == 'Q5.2', so answer.type must be a boolean */
    expect(generator.saveAnswer(false)).toBe(true)

    /** another component material */
    expect(generator.identifyNextQuestion()).toBe('Q4-3')
    generator.getNextQuestion()
    /* questionId == 'Q4', so answer.type must be a string */
    expect(generator.saveAnswer('CMC 2')).toBe(true)
    expect(generator.identifyNextQuestion()).toBe('Q5.1-3')
    generator.getNextQuestion()
    expect(generator.saveAnswer('Not applicable')).toBe(true)
    expect(generator.identifyNextQuestion()).toBe('Q5.2-3')
    generator.getNextQuestion()
    /* questionId == 'Q5.2', so answer.type must be a boolean */
    expect(generator.saveAnswer(false)).toBe(true)

    expect(generator.allQuestionsAnswered()).toBe(true)
  })

  it('should give tasks belonging to the same question for seperate components', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    // fill in some mock answers
    generator.allAnswers.set('Q1', 'My productname')
    generator.allAnswers.set('Q2', 'PFC 1.A.II')
    generator.allAnswers.set('Q3', ['Urea', 'biochar'])
    generator.allAnswers.set('Q4-1', 'CMC 1')
    generator.allAnswers.set('Q4-2', 'CMC 14')
    generator.allAnswers.set('Q5.1-1', 'Not applicable')
    generator.allAnswers.set('Q5.1-2', 'Urease inhibitor')
    generator.allAnswers.set('Q5.2-1', false)
    generator.allAnswers.set('Q5.2-2', false)
    expect(generator.identifyNextQuestion()).toEqual('END')
    expect(generator.allQuestionsAnswered()).toBe(true)

    const taskList = generator.getTechnicalDocumentationTaskList()
    const testTask: technicalDocumentationTask = {
      applicableElement: 'product',
      taskName: 'Include any other results, calculations, or studies carried out on the product related to compliance with requirements.',
      taskDetails: null,
      taskUrl: null
    }

    expect(taskList.find(task => task.taskName === testTask.taskName)).toHaveProperty('taskName')
    expect(taskList.find(task => task.taskName === testTask.taskName)).toHaveProperty('applicableElement')
    expect(taskList.filter(x => x.applicableElement === 'product')).toContainEqual(testTask)

    // check that the same task exists for multiple CMCs
    expect(taskList).toContainEqual(
      {
        applicableElement: '1',
        taskDetails: null,
        taskName: 'For each component, include a description of where the component comes from and how it was manufactured.',
        taskUrl: null
      }
    )
    expect(taskList).toContainEqual(
      {
        applicableElement: '2',
        taskDetails: null,
        taskName: 'For each component, include a description of where the component comes from and how it was manufactured.',
        taskUrl: null
      }
    )
    expect(taskList).not.toContainEqual(
      {
        applicableElement: '1',
        taskDetails: null,
        taskName: 'Demonstrate that the material has an urease inhibitor effect as described in Annex II, point 4 c.',
        taskUrl: null
      }
    )
    expect(taskList).toContainEqual(
      {
        applicableElement: '2',
        taskDetails: null,
        taskName: 'Demonstrate that the material has an urease inhibitor effect as described in Annex II, point 4 c.',
        taskUrl: null
      }
    )
  })

  it('should export the generator', () => {
    const generator = new Generator('en', 'FPR 2019/1009')

    expect(() => generator.saveToDisk('notajson.txt')).toThrowError('Filepath must be a json file.')
    expect(generator.saveToDisk('generator.json')).toBe(true)
    expect(() => generator.saveToDisk('generator.json')).toThrowError('Filepath already exists.')
    fs.unlinkSync('generator.json')

    // fill in some mock answers
    generator.allAnswers.set('Q1', 'My productname')
    generator.allAnswers.set('Q2', 'PFC 1.A.II')

    expect(generator.saveToDisk('generator.json')).toBe(true)
    fs.unlinkSync('generator.json')
  })

  it('the packageVersion of the generator should be the same as package.json', () => {
    const generator = new Generator('nl', 'FPR 2019/1009')
    expect(generator.packageVersion).toBe(version)
  })
})
