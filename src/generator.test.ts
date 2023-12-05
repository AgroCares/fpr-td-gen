import { test, expect } from 'vitest'
import Generator from './generator'

test('Assign name to product', () => {
  const generator = new Generator('MyProduct')
  expect(generator.getName()).toBe('MyProduct')
})

test('Assign name to product', () => {
  const generator = new Generator('MyProduct2')
  expect(generator.getName()).toBe('MyProduct2')
})

test('Return the technical documentation of the FPR', () => {
  const generator = new Generator('My FPR')
  const td = generator.getTd()
  expect(td).toEqual({
    name: 'My FPR',
    version: 'FPR/2022'
  })
})
