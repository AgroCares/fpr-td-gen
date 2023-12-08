import type { questionSetsType } from './shared.types'

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
    },
    {
      id: 'Q2',
      type: 'text',
      ask: {
        nl: 'Wat is de product functie categorie (PFC) van uw product?',
        en: 'What is the product function category (PFC) of your product?'
      },
      placeholder: {
        nl: 'PFC 1',
        en: 'PFC 1'
      },
      help: {
        nl: 'Dit is de PFC van het product.',
        en: 'This is the PFC of the product.'
      },
      options: null
    }
  ]

export default questionSets
