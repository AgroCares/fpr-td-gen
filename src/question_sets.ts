/* eslint-disable @typescript-eslint/indent */
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
      options: null,
      optionsid: null
    },
    {
      id: 'Q2',
      type: 'select',
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
          'PFC 3.A Organische bodemverbeteraar', 'PFC 3.B Anorganische bodemverbeteraar',
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
          'PFC 3.A Organic soil improver', 'PFC 3.B Inorganic soil improver',
          'PFC 4 Growing medium',
          'PFC 5.A Nitrification inhibitor', 'PFC 5.B denitrification inhibitor', 'PFC 5.C urease inhibitor',
          'PFC 6.A Microbial plant biostimulant', 'PFC 6.B Non-microbial plant biostimulant',
          'PFC 7 Fertilising product blend']
      },
      optionsid: ['PFC 1.A.I', 'PFC 1.A.II',
      'PFC 1.B.I', 'PFC 1.B.II',
      'PFC 1.C.I.a.i', 'PFC 1.C.I.a.i.A',
      'PFC 1.C.I.a.ii', 'PFC 1.C.I.a.ii.A',
      'PFC 1.C.I.b.i',
      'PFC 1.C.II.a',
      'PFC 2',
      'PFC 3.A', 'PFC 3.B',
      'PFC 4',
      'PFC 5.A', 'PFC 5.B', 'PFC 5.C',
      'PFC 6.A', 'PFC 6.B',
      'PFC 7']
    },
    {
      id: 'Q3',
      type: 'text',
      ask: {
        nl: 'Wat is de naam van dit bestandsdeel?',
        en: 'What is the name of this component?'
      },
      placeholder: {
        nl: 'bijvoorbeeld "urea" of "gehydrolyseerd plantaardig eiwit"',
        en: 'e.g. "urea" or "hydrolised plant protein"'
      },
      help: {
        nl: 'Een naam waarmee u het bestandsdeel in uw bemestingsproduct kunt herkennen zoals "urea" of "gehydrolyseerd plantaardig eiwit".',
        en: 'A name with which you are able to destinguish the component(s) in your fertilising product such as "urea" or "hydrolised plant protein".'
      },
      options: null,
      optionsid: null
    },
    {
      id: 'Q4',
      type: 'select',
      ask: {
        nl: 'Wat is de bestandsdeel categorie (CMC) van dit bestandsdeel?',
        en: 'What is the component material category (CMC) of this component?'
      },
      placeholder: {
        nl: 'CMC 1: stoffen en mengsels als primair materiaal',
        en: 'CMC 1: Virgin material substances and mixtures'
      },
      help: {
        nl: 'Elk bestanddeel moet voldoen aan de vereisten van één van bestandsdeel categorieën, kies de categorie waartoe uw bestandsdeel behoort.',
        en: 'Each component must meet the criteria of one component material category, pick the category to which your component belongs.'
      },
      options: {
        nl: [
          'CMC 1: stoffen en mengsels als primair materiaal',
          'CMC 2: planten, delen van planten of plantenextracten',
          'CMC 3: compost',
          'CMC 4: digestaat van verse gewassen',
          'CMC 5: ander digestaat dan digestaat van verse gewassen',
          'CMC 6: bijproducten van de levensmiddelenindustrie',
          'CMC 7: micro-organismen',
          'CMC 8: nutriëntenpolymeren',
          'CMC 9: andere polymeren dan nutriëntenpolymeren',
          'CMC 10: afgeleide producten in de zin van Verordening (EG) nr. 1069/2009',
          'CMC 11: bijproducten in de zin van Richtlijn 2008/98/EG',
          'CMC 12: neergeslagen fosfaatzouten en derivaten daarvan',
          'CMC 13: thermische-oxidatiematerialen en derivaten daarvan',
          'CMC 14: via pyrolyse en vergassing verkregen materialen',
          'CMC 15: teruggewonnen zeer zuivere materialen'
        ],
        en: [
          'CMC 1: Virgin material substances and mixtures',
          'CMC 2: Plants, plant parts or plant extracts',
          'CMC 3: Compost',
          'CMC 4: Fresh crop digestate',
          'CMC 5: Digestate other than fresh crop digestate',
          'CMC 6: Food industry by-products',
          'CMC 7: Micro-organisms',
          'CMC 8: Nutrient polymers',
          'CMC 9: Polymers other than nutrient polymers',
          'CMC 10: Derived products within the meaning of Regulation (EC) No 1069/2009',
          'CMC 11: By-products within the meaning of Directive 2008/98/EC',
          'CMC 12: Precipitated phosphate salts and derivates',
          'CMC 13: Thermal oxidation materials and derivates',
          'CMC 14: Pyrolysis and gasification materials',
          'CMC 15: Recovered high purity materials'
        ]
      },
      optionsid: [
        'CMC 1',
        'CMC 2',
        'CMC 3',
        'CMC 4',
        'CMC 5',
        'CMC 6',
        'CMC 7',
        'CMC 8',
        'CMC 9',
        'CMC 10',
        'CMC 11',
        'CMC 12',
        'CMC 13',
        'CMC 14',
        'CMC 15'
      ]
    },
    {
      id: 'Q5.1',
      type: 'select',
      ask: {
        nl: 'Is dit bestandsdeel een chelaatvormer of een complexvormer, of bestemd als nitrificatie-, denitrificatie- of ureaseremmer?',
        en: 'Is the component intended as chelating agent or complexing agent, or intended as a nitrification, a denitrification, or a urease inhibiting compound?'
      },
      placeholder: {
        nl: 'Niet van toepassing',
        en: 'Not applicable'
      },
      help: {
        nl: 'Op chelaat- en complexvormende bestandsdelen en op remmende bestandsdelen zijn extra vereisten van toepassing. Indien dit bestandsdeel niet één van deze functies heeft kun u "Niet van toepassing" opgeven.',
        en: 'Additional requirements apply to chelating and complexing agents and to inhibiting compounds. If this component does not have any of these functions please specify "Not applicable".'
      },
      options: {
        nl: [
          'Niet van toepassing', 'Chelaatvormer', 'Complexvormer', 'Nitrificatieremmer', 'Denitrificatieremmer', 'Ureaseremmer'
        ],
        en: [
          'Not applicable', 'Chelating agent', 'Complexing agent', 'Nitrification inhibitor', 'Denitrification inhibitor', 'Urease inhibitor'
        ]
      },
      optionsid: [
        'Not applicable', 'Chelating agent', 'Complexing agent', 'Nitrification inhibitor', 'Denitrification inhibitor', 'Urease inhibitor'
      ]
    },
    {
      id: 'Q5.2',
      type: 'checkbox',
      ask: {
        nl: 'Is het bestandsdeel of één van de materialen waarmee het bestandsdeel gemaakt wordt een dierlijk bijproduct?',
        en: 'Is the component or one of its input materials an animal byproduct?'
      },
      placeholder: {
        nl: '',
        en: ''
      },
      help: {
        nl: '',
        en: ''
      },
      options: null,
      optionsid: ['true', 'false']
    },
    {
      id: 'Q6',
      type: 'select',
      ask: {
        nl: 'Wilt u nog een bestandsdeel toevoegen?',
        en: 'Would you like to enter another component?'
      },
      placeholder: {
        nl: 'ja',
        en: 'nee'
      },
      help: {
        nl: 'Alle bestandsdelen van uw bemestingsproduct moeten worden ingevuld, samen moeten de bestandsdelen 100% van het product uitmaken.',
        en: 'All components of the fertilising product must be entered, together the components must make up 100% of the product'
      },
      options: {
        nl: ['ja', 'nee'],
        en: ['yes', 'no']
      },
      optionsid: ['true', 'false']
    }
  ]

export default questionSets
