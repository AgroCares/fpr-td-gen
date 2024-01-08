import type { questionSetsType } from './shared.types'

/**
 * Array with the questionsSets {@link questionSetsType}
 * @internal
 */
const questionSets: questionSetsType =
  [
    {
      id: 'Q1',
      type: 'text',
      ask: {
        nl: 'Wat is de naam van uw product?',
        en: 'What is the name of your product?'
      },
      placeholder: {
        nl: 'Naam product',
        en: 'Product name'
      },
      help: {
        nl: 'Dit is de naam van het product.',
        en: 'This is the name of the product.'
      },
      options: null
    }
  ]

export default questionSets
