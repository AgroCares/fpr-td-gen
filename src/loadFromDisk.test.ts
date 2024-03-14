import { describe, it, expect } from 'vitest'
import { readFileSync, writeFileSync, unlinkSync } from 'fs'

import Generator from './generator.ts'
// import { version } from '../package.json'
import loadFromDisk from './loadFromDisk.ts'

describe('loadFromDisk', () => {
  it('should load a generator from a JSON file', () => {
    const filePath = 'generator1.json'

    // Create a generator with some answers and store it
    const generator1 = new Generator('en', 'FPR 2019/1009')
    generator1.allAnswers.set('Q1', 'My productname')
    generator1.allAnswers.set('Q2', 'PFC 1.A.II')
    generator1.saveToDisk(filePath)

    // Load the generator from disk
    const generator2 = loadFromDisk(filePath)

    expect(generator2).to.be.an.instanceof(Generator)
    expect(generator1).toEqual(generator2)

    unlinkSync('generator1.json')
  })

  it('should throw an error if the file path is not a JSON file', () => {
    const filePath = 'generator.txt'

    expect(() => loadFromDisk(filePath)).to.throw('Filepath must be a json file.')
  })

  it('should throw an error if the file path does not exist', () => {
    const filePath = 'generator-does-not-exist.json'

    expect(() => loadFromDisk(filePath)).to.throw('Filepath does not exist')
  })

  it('should throw an error if the file has been modified after generation', () => {
    const filePath = 'generator2.json'

    // Create a generator with some answers and store it
    const generator1 = new Generator('en', 'FPR 2019/1009')
    generator1.allAnswers.set('Q1', 'My productname')
    generator1.allAnswers.set('Q2', 'PFC 1.A.II')
    generator1.saveToDisk(filePath)

    // Modify the file after generation
    const filePath2 = 'generator3.json'
    const generator2 = JSON.parse(readFileSync(filePath, 'utf8'))
    generator2.properties.locale = 'nl'
    writeFileSync(filePath2, JSON.stringify(generator2))

    // Load the generator from disk
    expect(() => loadFromDisk(filePath2)).to.throw('Unable to load generator. The file has been modified after generation.')

    unlinkSync('generator2.json')
    unlinkSync('generator3.json')
  })
})
