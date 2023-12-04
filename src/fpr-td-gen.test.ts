import { test, expect } from 'vitest'
import FprTdGen from './fpr-td-gen'

test('Assign name to product', () => {
  const fprTdGen = new FprTdGen('MyProduct')
  expect(fprTdGen.getName()).toBe('MyProduct')
})

test('Assign name to product', () => {
  const fprTdGen = new FprTdGen('MyProduct2')
  expect(fprTdGen.getName()).toBe('MyProduct2')
})

test('Return the technical documentation of the FPR', () => {
  const fprTdGen = new FprTdGen('My FPR')
  const td = fprTdGen.getTd()
  expect(td).toEqual({
    name: 'My FPR',
    version: 'FPR/2022'
  })
})
