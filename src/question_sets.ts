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
        nl: 'PFC 1.A.I Vaste organische meststof',
        en: 'PFC 1.A.I Solid organic fertiliser'
      },
      help: {
        nl: 'Dit is de PFC van het product.',
        en: 'This is the PFC of the product.'
      },
      options: {
        nl: ['PFC 1.A.I Vaste organische meststof', 'PFC 1.A.II vloeibare organische meststof',
          'PFC 1.B.I Vaste organo-minerale meststof', 'PFC 1.B.II Vloeibare organo-minerale meststof',
          'PFC 1.C.I.a.i Enkelvoudige vaste anorganische macronutriëntenmeststof', 'PFC 1.C.I.a.i.A Enkelvoudige vaste anorganische macronutriëntenmeststof op basis van ammoniumnitraat en met een hoog stikstofgehalte',
          'PFC 1.C.I.a.ii Samengestelde vaste anorganische macronutriëntenmeststof', 'PFC 1.C.I.a.ii.A Samengestelde vaste anorganische macronutriëntenmeststof op basis van ammoniumnitraat en met een hoog stikstofgehalte',
          'PFC 1.C.I.b.i Enkelvoudige vloeibare anorganische macronutriëntenmeststof', 'PFC 1.C.I.b.ii Samengestelde vloeibare anorganische macronutriëntenmeststof',
          'PFC 1.C.II.a Enkelvoudige anorganische micronutriënten meststof', 'PFC 1.C.II.b Samengestelde anorganische micronutriëntenmeststof',
          'PFC 2 Kalkmeststof',
          'PFC 3.A Organische bodemverbeteraar', 'PFC.3.B Anorganische bodemverbeteraar',
          'PFC 4 Groeimedium',
          'PFC 5.A Nitrificatieremmer', 'PFC 5.B Denitrificatieremmer', 'PFC 5.C Ureaseremmer',
          'PFC 6.A Microbiële biostimulant voor planten', 'PFC 6.B Niet-microbiële biostimulant voor planten',
          'PFC 7 Bemestingsprodcutenblend'],
        en: ['PFC 1.A.I Solid organic fertiliser', 'PFC 1.A.II Liquid organic fertiliser',
          'PFC 1.B.I Solid organo-mineral fertiliser', 'PFC 1.B.II Liquid organo-mineral fertiliser',
          'PFC 1.C.I.a.i Straight solid inorganic macronutrient fertiliser', 'PFC 1.C.I.a.i.A Straight solid inorganic macronutrient ammonium nitrate fertiliser of high nitrogen content',
          'PFC 1.C.I.a.ii Compound solid inorganic macronutrient fertiliser', 'PFC 1.C.I.a.ii.A Compound solid inorganic macronutrient ammonium nitrate fertiliser of high nitrogen content',
          'PFC 1.C.I.b.i Straight liquid inorganic macronutrient fertiliser', 'PFC 1.C.I.b.ii Compound liquid inorganic macronutrient fertiliser',
          'PFC 1.C.II.a Straight inorganic micronutrient fertiliser', 'PFC 1.C.II.b Compound inorganic micronutrient fertiliser',
          'PFC 2 Liming material',
          'PFC 3.A Organic soil improver', 'PFC.3.B Inorganic soil improver',
          'PFC 4 Growing medium',
          'PFC 5.A Nitrification inhibitor', 'PFC 5.B denitrification inhibitor', 'PFC 5.C urease inhibitor',
          'PFC 6.A Microbial plant biostimulant', 'PFC 6.B Non-microbial plant biostimulant',
          'PFC 7 Fertilising product blend']
      }
    }
  ]

export default questionSets
