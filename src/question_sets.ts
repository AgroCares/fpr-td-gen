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
      options: [
        {
          value: 'PFC 1.A.I',
          locale: {
            nl: 'PFC 1.A.I Vaste organische meststof',
            en: 'PFC 1.A.I Solid organic fertiliser'
          }
        },
        {
          value: 'PFC 1.A.II',
          locale: {
            nl: 'PFC 1.A.II vloeibare organische meststof',
            en: 'PFC 1.A.II Liquid organic fertiliser'
          }
        },
        {
          value: 'PFC 1.B.I',
          locale: {
            nl: 'PFC 1.B.I Vaste organo-minerale meststof',
            en: 'PFC 1.B.I Solid organo-mineral fertiliser'
          }
        },
        {
          value: 'PFC 1.B.II',
          locale: {
            nl: 'PFC 1.B.II Vloeibare organo-minerale meststof',
            en: 'PFC 1.B.II Liquid organo-mineral fertiliser'
          }
        },
        {
          value: 'PFC 1.C.I.a.i',
          locale: {
            nl: 'PFC 1.C.I.a.i Enkelvoudige vaste anorganische macronutriëntenmeststof',
            en: 'PFC 1.C.I.a.i Straight solid inorganic macronutrient fertiliser'
          }
        },
        {
          value: 'PFC 1.C.I.a.i.A',
          locale: {
            nl: 'PFC 1.C.I.a.i.A Enkelvoudige vaste anorganische macronutriëntenmeststof op basis van ammoniumnitraat en met een hoog stikstofgehalte',
            en: 'PFC 1.C.I.a.i.A Straight solid inorganic macronutrient ammonium nitrate fertiliser of high nitrogen content'
          }
        },
        {
          value: 'PFC 1.C.I.a.ii',
          locale: {
            nl: 'PFC 1.C.I.a.ii Samengestelde vaste anorganische macronutriëntenmeststof',
            en: 'PFC 1.C.I.a.ii Compound solid inorganic macronutrient fertiliser'
          }
        },
        {
          value: 'PFC 1.C.I.a.ii.A',
          locale: {
            nl: 'PFC 1.C.I.a.ii.A Samengestelde vaste anorganische macronutriëntenmeststof op basis van ammoniumnitraat en met een hoog stikstofgehalte',
            en: 'PFC 1.C.I.a.ii.A Compound solid inorganic macronutrient ammonium nitrate fertiliser of high nitrogen content'
          }
        },
        {
          value: 'PFC 1.C.I.b.i',
          locale: {
            nl: 'PFC 1.C.I.b.i Enkelvoudige vloeibare anorganische macronutriëntenmeststof',
            en: 'PFC 1.C.I.b.i Straight liquid inorganic macronutrient fertiliser'
          }
        },
        {
          value: 'PFC 1.C.I.b.ii',
          locale: {
            nl: 'PFC 1.C.I.b.ii Samengestelde vloeibare anorganische macronutriëntenmeststof',
            en: 'PFC 1.C.I.b.ii Compound liquid inorganic macronutrient fertiliser'
          }
        },
        {
          value: 'PFC 1.C.II.a',
          locale: {
            nl: 'PFC 1.C.II.a Enkelvoudige anorganische micronutriënten meststof',
            en: 'PFC 1.C.II.a Straight inorganic micronutrient fertiliser'
          }
        },
        {
          value: 'PFC 1.C.II.b',
          locale: {
            nl: 'PFC 1.C.II.b Samengestelde anorganische micronutriëntenmeststof',
            en: 'PFC 1.C.II.b Compound inorganic micronutrient fertiliser'
          }
        },
        {
          value: 'PFC 2',
          locale: {
            nl: 'PFC 2 Kalkmeststof',
            en: 'PFC 2 Liming material'
          }
        },
        {
          value: 'PFC 3.A',
          locale: {
            nl: 'PFC 3.A Organische bodemverbeteraar',
            en: 'PFC 3.A Organic soil improver'
          }
        },
        {
          value: 'PFC 3.B',
          locale: {
            nl: 'PFC 3.B Anorganische bodemverbeteraar',
            en: 'PFC 3.B Inorganic soil improver'
          }
        },
        {
          value: 'PFC 4',
          locale: {
            nl: 'PFC 4 Groeimedium',
            en: 'PFC 4 Growing medium'
          }
        },
        {
          value: 'PFC 5.A',
          locale: {
            nl: 'PFC 5.A Nitrificatieremmer',
            en: 'PFC 5.A Nitrification inhibitor'
          }
        },
        {
          value: 'PFC 5.B',
          locale: {
            nl: 'PFC 5.B Denitrificatieremmer',
            en: 'PFC 5.B Denitrification inhibitor'
          }
        },
        {
          value: 'PFC 5.C',
          locale: {
            nl: 'PFC 5.C Ureaseremmer',
            en: 'PFC 5.C Urease inhibitor'
          }
        },
        {
          value: 'PFC 6.A',
          locale: {
            nl: 'PFC 6.A Microbiële biostimulant voor planten',
            en: 'PFC 6.A Microbial plant biostimulant'
          }
        },
        {
          value: 'PFC 6.B',
          locale: {
            nl: 'PFC 6.B Niet-microbiële biostimulant voor planten',
            en: 'PFC 6.B Non-microbial plant biostimulant'
          }
        },
        {
          value: 'PFC 7',
          locale: {
            nl: 'PFC 7 Bemestingsprodcutenblend',
            en: 'PFC 7 Fertilising product blend'
          }
        }
      ]
    },
    {
      id: 'Q3',
      type: 'multitext',
      ask: {
        nl: 'Wat is de naam van elk bestandsdeel in uw product?',
        en: 'What is the name of each component in your product?'
      },
      placeholder: {
        nl: 'bijvoorbeeld "urea" of "gehydrolyseerd plantaardig eiwit"',
        en: 'e.g. "urea" or "hydrolised plant protein"'
      },
      help: {
        nl: 'Geef voor ieder bestandsdeel in uw product een naam op waarmee u het bestandsdeel kunt herkennen zoals "urea" of "gehydrolyseerd plantaardig eiwit".',
        en: 'For each component in your product, enter a name with which you are able to destinguish the component in your fertilising product such as "urea" or "hydrolised plant protein".'
      },
      options: null
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
      options: [
        {
          value: 'CMC 1',
          locale: {
            nl: 'CMC 1: Stoffen en mengsels als primair materiaal',
            en: 'CMC 1: Virgin material substances and mixtures'
          }
        },
        {
          value: 'CMC 2',
          locale: {
            nl: 'CMC 2: Planten, delen van planten of plantenextracten',
            en: 'CMC 2: Plants, plant parts or plant extracts'
          }
        },
        {
          value: 'CMC 3',
          locale: {
            nl: 'CMC 3: Compost',
            en: 'CMC 3: Compost'
          }
        },
        {
          value: 'CMC 4',
          locale: {
            nl: 'CMC 4: Digestaat van verse gewassen',
            en: 'CMC 4: Fresh crop digestate'
          }
        },
        {
          value: 'CMC 5',
          locale: {
            nl: 'CMC 5: Ander digestaat dan digestaat van verse gewassen',
            en: 'CMC 5: Digestate other than fresh crop digestate'
          }
        },
        {
          value: 'CMC 6',
          locale: {
            nl: 'CMC 6: Bijproducten van de levensmiddelenindustrie',
            en: 'CMC 6: Food industry by-products'
          }
        },
        {
          value: 'CMC 7',
          locale: {
            nl: 'CMC 7: Micro-organismen',
            en: 'CMC 7: Micro-organisms'
          }
        },
        {
          value: 'CMC 8',
          locale: {
            nl: 'CMC 8: Nutriëntenpolymeren',
            en: 'CMC 8: Nutrient polymers'
          }
        },
        {
          value: 'CMC 9',
          locale: {
            nl: 'CMC 9: Andere polymeren dan nutriëntenpolymeren',
            en: 'CMC 9: Polymers other than nutrient polymers'
          }
        },
        {
          value: 'CMC 10',
          locale: {
            nl: 'CMC 10: Afgeleide producten in de zin van Verordening (EG) nr. 1069/2009',
            en: 'CMC 10: Derived products within the meaning of Regulation (EC) No 1069/2009'
          }
        },
        {
          value: 'CMC 11',
          locale: {
            nl: 'CMC 11: Bijproducten in de zin van Richtlijn 2008/98/EG',
            en: 'CMC 11: By-products within the meaning of Directive 2008/98/EC'
          }
        },
        {
          value: 'CMC 12',
          locale: {
            nl: 'CMC 12: Neergeslagen fosfaatzouten en derivaten daarvan',
            en: 'CMC 12: Precipitated phosphate salts and derivatives'
          }
        },
        {
          value: 'CMC 13',
          locale: {
            nl: 'CMC 13: Thermische-oxidatiematerialen en derivaten daarvan',
            en: 'CMC 13: Thermal oxidation materials and derivatives'
          }
        },
        {
          value: 'CMC 14',
          locale: {
            nl: 'CMC 14: Via pyrolyse en vergassing verkregen materialen',
            en: 'CMC 14: Pyrolysis and gasification materials'
          }
        },
        {
          value: 'CMC 15',
          locale: {
            nl: 'CMC 15: Teruggewonnen zeer zuivere materialen',
            en: 'CMC 15: Recovered high purity materials'
          }
        }
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
      options: [
        {
          value: 'Not applicable',
          locale: {
            nl: 'Niet van toepassing',
            en: 'Not applicable'
          }
        },
        {
          value: 'Chelating agent',
          locale: {
            nl: 'Chelaatvormer',
            en: 'Chelating agent'
          }
        },
        {
          value: 'Complexing agent',
          locale: {
            nl: 'Complexvormer',
            en: 'Complexing agent'
          }
        },
        {
          value: 'Nitrification inhibitor',
          locale: {
            nl: 'Nitrificatieremmer',
            en: 'Nitrification inhibitor'
          }
        },
        {
          value: 'Denitrification inhibitor',
          locale: {
            nl: 'Denitirifcatieremmer',
            en: 'Denitrification inhibitor'
          }
        },
        {
          value: 'Urease inhibitor',
          locale: {
            nl: 'Ureaseremmer',
            en: 'Urease inhibitor'
          }
        }
      ]
    },
    {
      id: 'Q5.2',
      type: 'checkbox',
      ask: {
        nl: 'Is het bestandsdeel of één van de materialen waarmee het bestandsdeel gemaakt wordt een dierlijk bijproduct?',
        en: 'Is the component or one of its input materials an animal byproduct?'
      },
      placeholder: null,
      help: {
        nl: '',
        en: ''
      },
      options: null
    },
    /*    {
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
      options: [
        {
          value: 'Yes',
          locale: {
            nl: 'Ja',
            en: 'Yes'
          }
        },
        {
          value: 'No',
          locale: {
            nl: 'Nee',
            en: 'No'
          }
        }
      ]
        }, */
    {
      id: 'Q7',
      type: 'multitext',
      ask: {
        nl: 'Hoe heten de EU-bemestingsproducten in uw bemestingsproductenblend?',
        en: 'What are the EU-fertilising products called which are contained in your fertilising product blend?'
      },
      placeholder: {
        nl: 'ProductEU-x; ProductEU-y',
        en: 'ProductEU-x; ProductEU-y'
      },
      help: {
        nl: 'Een EU-bemestingsproduct in PFC 7 bestaat doorgaans uit meerdere EU-bemestingsproducten van PFC 1 tot en met PFC 6. Geef hier de naam voor ieder EU-bemestingsproduct in uw PFC 7 bemestingsproductenblend. Indien uw blend 1 product bevat welke meerdere product functie categorie aanwijzingen heeft, vul dan voor iedere categorie een naam in.',
        en: 'An EU fertilising product in PFC 7 typically consists out of multiple EU fertiling products in categories PFC 1 to PFC 6. Give the name of each EU fertilising product composing your PFC 7 fertilising product blend. If your blend contains only one product which has multiple product function category designations, enter a name for each category.'
      },
      options: null
    },
    {
      id: 'Q7.1.',
      type: 'select',
      ask: {
        nl: 'Wat is de type aanduiding van dit bestandsdeel EU-bemestingsproduct?',
        en: 'What is the type designation of this component EU-fertilising product'
      },
      placeholder: null,
      help: {
        nl: 'Een EU-bemestingsproduct in PFC 7 bestaat uit meerdere EU-bemestingsproducten van PFC 1 tot en met PFC 6, geef hier aan welke PFC aanduiding dit bestandsdeel heeft.',
        en: 'An EU fertilising product in PFC 7 concsist out of multiple EU fertiling products in categories PFC 1 to PFC 6, indicate the PFC designation of this component.'
      },
      options: [
        {
          value: 'PFC 1.A.I',
          locale: {
            nl: 'PFC 1.A.I Vaste organische meststof',
            en: 'PFC 1.A.I Solid organic fertiliser'
          }
        },
        {
          value: 'PFC 1.A.II',
          locale: {
            nl: 'PFC 1.A.II vloeibare organische meststof',
            en: 'PFC 1.A.II Liquid organic fertiliser'
          }
        },
        {
          value: 'PFC 1.B.I',
          locale: {
            nl: 'PFC 1.B.I Vaste organo-minerale meststof',
            en: 'PFC 1.B.I Solid organo-mineral fertiliser'
          }
        },
        {
          value: 'PFC 1.B.II',
          locale: {
            nl: 'PFC 1.B.II Vloeibare organo-minerale meststof',
            en: 'PFC 1.B.II Liquid organo-mineral fertiliser'
          }
        },
        {
          value: 'PFC 1.C.I.a.i',
          locale: {
            nl: 'PFC 1.C.I.a.i Enkelvoudige vaste anorganische macronutriëntenmeststof',
            en: 'PFC 1.C.I.a.i Straight solid inorganic macronutrient fertiliser'
          }
        },
        {
          value: 'PFC 1.C.I.a.i.A',
          locale: {
            nl: 'PFC 1.C.I.a.i.A Enkelvoudige vaste anorganische macronutriëntenmeststof op basis van ammoniumnitraat en met een hoog stikstofgehalte',
            en: 'PFC 1.C.I.a.i.A Straight solid inorganic macronutrient ammonium nitrate fertiliser of high nitrogen content'
          }
        },
        {
          value: 'PFC 1.C.I.a.ii',
          locale: {
            nl: 'PFC 1.C.I.a.ii Samengestelde vaste anorganische macronutriëntenmeststof',
            en: 'PFC 1.C.I.a.ii Compound solid inorganic macronutrient fertiliser'
          }
        },
        {
          value: 'PFC 1.C.I.a.ii.A',
          locale: {
            nl: 'PFC 1.C.I.a.ii.A Samengestelde vaste anorganische macronutriëntenmeststof op basis van ammoniumnitraat en met een hoog stikstofgehalte',
            en: 'PFC 1.C.I.a.ii.A Compound solid inorganic macronutrient ammonium nitrate fertiliser of high nitrogen content'
          }
        },
        {
          value: 'PFC 1.C.I.b.i',
          locale: {
            nl: 'PFC 1.C.I.b.i Enkelvoudige vloeibare anorganische macronutriëntenmeststof',
            en: 'PFC 1.C.I.b.i Straight liquid inorganic macronutrient fertiliser'
          }
        },
        {
          value: 'PFC 1.C.I.b.ii',
          locale: {
            nl: 'PFC 1.C.I.b.ii Samengestelde vloeibare anorganische macronutriëntenmeststof',
            en: 'PFC 1.C.I.b.ii Compound liquid inorganic macronutrient fertiliser'
          }
        },
        {
          value: 'PFC 1.C.II.a',
          locale: {
            nl: 'PFC 1.C.II.a Enkelvoudige anorganische micronutriënten meststof',
            en: 'PFC 1.C.II.a Straight inorganic micronutrient fertiliser'
          }
        },
        {
          value: 'PFC 1.C.II.b',
          locale: {
            nl: 'PFC 1.C.II.b Samengestelde anorganische micronutriëntenmeststof',
            en: 'PFC 1.C.II.b Compound inorganic micronutrient fertiliser'
          }
        },
        {
          value: 'PFC 2',
          locale: {
            nl: 'PFC 2 Kalkmeststof',
            en: 'PFC 2 Liming material'
          }
        },
        {
          value: 'PFC 3.A',
          locale: {
            nl: 'PFC 3.A Organische bodemverbeteraar',
            en: 'PFC 3.A Organic soil improver'
          }
        },
        {
          value: 'PFC 3.B',
          locale: {
            nl: 'PFC 3.B Anorganische bodemverbeteraar',
            en: 'PFC 3.B Inorganic soil improver'
          }
        },
        {
          value: 'PFC 4',
          locale: {
            nl: 'PFC 4 Groeimedium',
            en: 'PFC 4 Growing medium'
          }
        },
        {
          value: 'PFC 5.A',
          locale: {
            nl: 'PFC 5.A Nitrificatieremmer',
            en: 'PFC 5.A Nitrification inhibitor'
          }
        },
        {
          value: 'PFC 5.B',
          locale: {
            nl: 'PFC 5.B Denitrificatieremmer',
            en: 'PFC 5.B Denitrification inhibitor'
          }
        },
        {
          value: 'PFC 5.C',
          locale: {
            nl: 'PFC 5.C Ureaseremmer',
            en: 'PFC 5.C Urease inhibitor'
          }
        },
        {
          value: 'PFC 6.A',
          locale: {
            nl: 'PFC 6.A Microbiële biostimulant voor planten',
            en: 'PFC 6.A Microbial plant biostimulant'
          }
        },
        {
          value: 'PFC 6.B',
          locale: {
            nl: 'PFC 6.B Niet-microbiële biostimulant voor planten',
            en: 'PFC 6.B Non-microbial plant biostimulant'
          }
        }
      ]
    },
    /*    {
      id: 'Q7.2.',
      type: 'select',
      ask: {
        nl: 'Wilt u nog een EU-bemestingsproduct bestandsdeel toevoegen?',
        en: 'Would you like to enter another component EU fertilising product?'
      },
      placeholder: {
        nl: 'ja',
        en: 'nee'
      },
      help: {
        nl: 'Alle EU-bemestingsproduct bestandsdelen van uw PFC 7 bemestingsproductenblend moeten worden ingevuld, samen moeten de bestandsdelen 100% van de blend uitmaken.',
        en: 'All component EU fertilisingproducts of the fertilising product blend must be entered, together the components must make up 100% of the fertilising product blend'
      },
      options: [
        {
          value: 'Yes',
          locale: {
            nl: 'Ja',
            en: 'Yes'
          }
        },
        {
          value: 'No',
          locale: {
            nl: 'Nee',
            en: 'No'
          }
        }
      ]
    }, */
    {
      id: 'Q8.1',
      type: 'select',
      ask: {
        nl: 'Welke conformiteitsbeoordelingsmodule gebruikt u?',
        en: 'Which conformity assessment module do you use?'
      },
      placeholder: {
        nl: 'Module D1',
        en: 'Module D1'
      },
      help: {
        nl: 'Kies de module waarmee u wilt aantonen dat uw product voldoet aan de vereisten van de bemestingsproducten verordening',
        en: 'Choose the module which you want to use to demonstrate compliance with the requirements of the Fertilising product regulation'
      },
      options: [
        {
          value: 'Module A',
          locale: {
            nl: 'Module A',
            en: 'Module A'
          }
        },
        {
          value: 'Module B+C',
          locale: {
            nl: 'Module B+C',
            en: 'Module B+C'
          }
        },
        {
          value: 'Module D1',
          locale: {
            nl: 'Module D1',
            en: 'Module D1'
          }
        }
      ]
    },
    {
      id: 'Q8.2',
      type: 'select',
      ask: {
        nl: 'Welke conformiteitsbeoordelingsmodule gebruikt u?',
        en: 'Which conformity assessment module do you use?'
      },
      placeholder: {
        nl: 'Module D1',
        en: 'Module D1'
      },
      help: {
        nl: 'Kies de module waarmee u wilt aantonen dat uw product voldoent aan de vereisten van de bemestingsproducten verordening',
        en: 'Choose the module which you want to use to demonstrate compliance with the requirements of the Fertilising product regulation'
      },
      options: [
        {
          value: 'Module B+C',
          locale: {
            nl: 'Module B+C',
            en: 'Module B+C'
          }
        },
        {
          value: 'Module D1',
          locale: {
            nl: 'Module D1',
            en: 'Module D1'
          }
        }
      ]
    }
  ]

export default questionSets
