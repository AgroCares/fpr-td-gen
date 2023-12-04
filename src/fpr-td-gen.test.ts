import { test, expect } from 'vitest'
import FprTdGen from './fpr-td-gen'

test('Assign name to product', () => {
  const fprTdGen = new FprTdGen('MyProduct')
  expect(fprTdGen.getName()).toBe('MyProduct')
})
