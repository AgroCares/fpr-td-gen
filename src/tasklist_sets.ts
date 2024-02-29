import type { tasklistSetsType } from './shared.types'

/**
 * Array with information that needs to be in a product's technical documentaiton {@link tasklistSetsType}
 * @internal
 */
const tasklistSets: tasklistSetsType = [
  {
    taskId: 1,
    id: '',
    task: {
      nl: 'Voeg een algemene beschrijving van het product toe aan de technische documentatie, inclusief een beschrijving van de beoogde toepassing.',
      en: 'Include a general description of the product in the technical documentation, including a description of the intended use.'
    },
    answer: undefined
  },
  {
    taskId: 2,
    id: 'Q2',
    task: {
      nl: 'Geef aan tot welke product functie categorie (PFC) uw product behoort.',
      en: 'Indicate to which product function category (PFC) your product belongs.'
    },
    answer: ['PFC 1.A.I', 'PFC 1.A.II', 'PFC 1.B.I', 'PFC 1.B.II', 'PFC 1.C.I.a.i', 'PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii', 'PFC 1.C.I.a.ii.A', 'PFC 1.C.I.b.i', 'PFC 1.C.I.b.ii', 'PFC 1.C.II.a', 'PFC 1.C.II.b', 'PFC 2', 'PFC 3.A', 'PFC 3.B', 'PFC 4', 'PFC 5.A', 'PFC 5.B', 'PFC 5.C', 'PFC 6.A', 'PFC 6.B', 'PFC 7']
  },
  {
    taskId: 2,
    id: 'Q2',
    task: {
      nl: 'Voeg de verklaring van conformity toe van elk EU bemestingsproduct in uw bemestingsproductenblend',
      en: 'Include the declarations of conformity of the component EU fertilising products'
    },
    answer: ['PFC 7']
  },
  {
    taskId: 3,
    id: 'Q3',
    task: {
      nl: 'Voeg een lijst toe van alle bestanddelen van uw product',
      en: 'Include a list of all components of your product'
    },
    answer: undefined
  },
  {
    taskId: 4,
    id: 'Q3',
    task: {
      nl: 'Voeg een beschrijving toe van het productieproces inclusief schema\'s of tekeningen om het productie proces te verduidelijken.',
      en: 'Include a description of the production process including schematics or drawings to clarify the production process.'
    },
    answer: undefined
  },
  {
    taskId: 5,
    id: 'Q4',
    task: {
      nl: 'Geef een lijst op van alle bestandsdelen en geef hierbij voor ieder bestandsdeel aan tot welke bestandsdeelcategorie (CMC) het hoort.',
      en: 'Include a list of components and to which component material category (CMC) they belong.'
    },
    answer: undefined
  },
  {
    taskId: 6,
    id: 'Q4',
    task: {
      nl: 'Geef voor ieder bestandsdeel aan waar het vandaan komt en hoe het is geproduceerd',
      en: 'For each component, include a description of where the component comes from and how it was manufactured.'
    },
    answer: ['CMC 1', 'CMC 2', 'CMC 3', 'CMC 4', 'CMC 5', 'CMC 6', 'CMC 7', 'CMC 8', 'CMC 9', 'CMC 10', 'CMC 11', 'CMC 12', 'CMC 13', 'CMC 14', 'CMC 15']
  },
  {
    taskId: 7,
    id: 'Q5.1',
    task: {
      nl: 'Toon aan dat dit materiaal of A: een organisch materiaal die bestaat uit een molecuul dat: 1. op twee of meer plaatsen elektronenparen kan doneren aan een centraal overgangsmetaalkation (zink (Zn), koper (Cu), ijzer (Fe), mangaan (Mn), magnesium (Mg), calcium (Ca) of kobalt (Co)), en 2. groot genoeg is om een structuur met vijf of zes ringen te vormen. Het EU-bemestingsproduct blijft gedurende minstens drie dagen stabiel in een oplossing met een pH binnen het bereik waarvan is aangegeven dat het een aanvaardbare stabiliteit waarborgt.',
      en: 'Demonstrate that the material is either A: an organic substance consisting in a molecule which; 1 has two or more sites that donate electron pairs to a central transition metal cation (zinc (Zn), copper (Cu), iron (Fe), manganese (Mn), magnesium (Mg), calcium (Ca) or cobalt (Co)), and is large enough to form a five- or six- membered cyclic structured. The EU fertilising product shall remain stable for at least 3 days in a solution having any pH within the range declared as guaranteeing acceptable stability.'
    },
    answer: ['Chelating agent']
  },
  {
    taskId: 8,
    id: 'Q5.1',
    task: {
      nl: 'Toon aan dat het materiaal een organische stof is die  een platte of ruimtelijke structuur vormt met een di- of trivalent overgangsmetaalkation (zink (Zn), koper (Cu), ijzer (Fe), mangaan (Mn) of kobalt (Co)). Ook moet het EU-bemestingsproduct gedurende minstens 1 dag stabiel blijven in een wateroplossing bij pH 6 en 7.',
      en: 'Demonstrate that: The complexing agent shall be an organic substance forming a flat or steric structure with one di- or tri- valent transition metal cation (zinc (Zn), copper (Cu), iron (Fe), manganese (Mn) or cobalt (Co)). The EU fertilising product shall remain stable in water solution at pH 6 and 7 for at least 1 day.'
    },
    answer: ['Complexing agent']
  },
  {
    taskId: 9,
    id: 'Q5.1',
    task: {
      nl: 'Toon aan dat het materiaal werkt als nitrificatieremmer zoals beschreven in Bijlage II, deel II CMC 1 punt 4.',
      en: 'Demonstrate that the material works as a nitrification inhibitor as described in Annex II, point 4 a.'
    },
    answer: ['Nitrification inhibitor']
  },
  {
    taskId: 10,
    id: 'Q5.1',
    task: {
      nl: 'Toon aan dat het materiaal een denitiricatieremmende werking heeft zoals beschreven in Bijlage II, deel II CMC 1 punt 4 b.',
      en: 'Demonstrate that the material has a denitrification inhibitor effect as described in Annex II, point 4 b.'
    },
    answer: ['Denitrification inhibitor']
  },
  {
    taskId: 11,
    id: 'Q5.1',
    task: {
      nl: 'Toon aan dat het materiaal een urease remmende werking heeft zoals beschreven in Bijlage II, deel II CMC 1 punt 4 c.',
      en: 'Demonstrate that the material has an urease inhibitor effect as described in Annex II, point 4 c.'
    },
    answer: ['Urease inhibitor']
  },
  {
    taskId: 12,
    id: 'Q4',
    task: {
      nl: 'Bewijs van REACH registratie van het materiaal inclusief informatie uit bijlages VI, VII en VIII van REACH alsmede een veiligheidsblad zoals beschreven in Artikel 14 van REACH.',
      en: 'Proof of REACH registration of the substance or mixture with information provided by Annexes VI, VII, and VIII to REACH and a chemical safety report as described in Article 14 of REACH.'
    },
    answer: ['CMC 1', 'CMC 6', 'CMC 11', 'CMC 12', 'CMC 13', 'CMC 14', 'CMC 15']
  },
  {
    taskId: 13,
    id: 'Q4',
    task: {
      nl: 'Voeg voor ieder additief een bewijs van REACH registratie toe met informatie uit bijlages VI, VII en VIII van REACH alsmede een veiligheidsblad zoals beschreven in Artikel 14 van REACH.',
      en: 'For each additive, include proof of REACH registration of the additive with information provided by Annexes VI, VII, and VIII to REACH and a chemical safety report as described in Article 14 of REACH.'
    },
    answer: ['CMC 3', 'CMC 4']
  },
  {
    taskId: 14,
    id: '',
    task: {
      nl: 'voeg een lijst toe van alle standaarden en specificaties welke gebruikt zijn voor tests om aan te tonen dat het product voldoet aan de gestelde eisen voor de product functie categorie en de component materiaal categorie(ën).',
      en: 'Include a list of all standards and specifications used for tests to demonstrate that the product meets the requirements for the product function category and the component material category(ies).'
    },
    answer: undefined
  },
  {
    taskId: 15,
    id: '',
    task: {
      nl: 'Voeg alle test verslagen van de metingen en onderzoeken welke zijn uitgevoerd om aan te tonen dat voldaan wordt aan de vereisten van de PFC en CMCs van het product.',
      en: 'Include test reports of the measurements and tests done to demonstrate the compliance with the requirements for the PFC and CMCs.'
    },
    answer: undefined
  },
  {
    taskId: 16,
    id: '',
    task: {
      nl: 'Voeg het een copy van het product label toe.',
      en: 'Include a copy of the product label or leaflet.'
    },
    answer: undefined
  },
  {
    taskId: 17,
    id: '',
    task: {
      nl: 'Voeg alle overige resultaten, berekeningen of onderzoeken toe welke verricht zijn op het product en gerelateerd zijn aan de conformiteitsbeoordeling.',
      en: 'Include any other results, calculations, or studies carried out on the product related to compliance with requirements.'
    },
    answer: undefined
  },
  {
    taskId: 17,
    id: '',
    task: {
      nl: 'Voeg alle overige resultaten, berekeningen of onderzoeken toe welke verricht zijn op het product en gerelateerd zijn aan de conformiteitsbeoordeling.',
      en: 'Include any other results, calculations, or studies carried out on the product related to compliance with requirements.'
    },
    answer: undefined
  },
  // requirements for products of PFC 1
  {
    taskId: 19,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product nutriënten kan leveren aan planten of paddestoelen. Bijvoorbeeld door het gehalte van een nutriënt aan te tonen',
      en: 'Demonstrate that the product can provide nutrients to plants or mushrooms. For example by proving certain nutrient content.'
    },
    answer: ['PFC 1.A.I', 'PFC 1.A.II', 'PFC 1.B.I', 'PFC 1.B.II', 'PFC 1.C.I.a.i', 'PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii', 'PFC 1.C.I.a.ii.A', 'PFC 1.C.I.b.i', 'PFC 1.C.I.b.ii', 'PFC 1.C.II.a', 'PFC 1.C.II.b']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product organische koolstof van biologische oorsprong bevat',
      en: 'Demonstrate that the product contains organic carbon from biological origin'
    },
    answer: ['PFC 1.A.I', 'PFC 1.A.II']
  },
  {
    taskId: 21,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product niet de limieten voor Cd, Cr VI, Hg, Ni, Pb, As, biuret, Cu, en Zn overschreidt.',
      en: 'Demonstrate that the product does not exceed the limits for Cd, Cr VI, Hg, Ni, Pb, As, biuret, Cu, and Zn.'
    },
    answer: ['PFC 1.A.I', 'PFC 1.A.II', 'PFC 1.B.I', 'PFC 1.B.II']
  },
  {
    taskId: 21,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product niet de limieten voor microorganismen overschreidt',
      en: 'Demonstrate that the product does not exceed the limits for microorganisms.'
    },
    answer: ['PFC 1.A.I', 'PFC 1.A.II', 'PFC 1.B.I', 'PFC 1.B.II']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product moet in vaste vorm zijn.',
      en: 'The product must be in solid form.'
    },
    answer: ['PFC 1.A.I', 'PFC 1.B.I']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product een voldoende gehalte N, P en/of K heeft',
      en: 'Demonstrate that the product contains sufficient N, P, and/or K.'
    },
    answer: ['PFC 1.A.I', 'PFC 1.A.II', 'PFC 1.B.I', 'PFC 1.B.II']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product moet in vloeibare vorm zijn.',
      en: 'The product must be in liquid form.'
    },
    answer: ['PFC 1.A.II', 'PFC 1.B.II']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het organische koolstof gehalte tenminste 15% is op massa basis.',
      en: 'Demonstrate that the organic carbon content is at least 15% by mass.'
    },
    answer: ['PFC 1.A.I']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het organische koolstof gehalte tenminste 5% is op massa basis.',
      en: 'Demonstrate that the organic carbon content is at least 5% by mass.'
    },
    answer: ['PFC 1.A.II', 'PFC 1.B.I']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Uit de lijst van componenten moet blijken dat het product (een organo-minerale meststof PFC 1 B) een inorganische meststof bevat en een materiaal wat organische koolstof en nutriënten van biologische oorsprong bevat.',
      en: 'From the list of components it must be evident that the product (an organo-mineral fertiliser PFC 1 B) contains an inorganic fertiliser and at least one material containing organic carbon and nutrients of solely biological origin '
    },
    answer: ['PFC 1.B.I', 'PFC 1.B.II']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het gehalte ammonium nitraat moet lager zijn dan 16%.',
      en: 'The ammonium nitrate contents must be <16%.'
    },
    answer: ['PFC 1.B.I', 'PFC 1.B.II']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het organische koolstof gehalte tenminste 3% is op massa basis.',
      en: 'Demonstrate that the organic carbon content is at least 3% by mass.'
    },
    answer: ['PFC 1.B.II']
  }
]

export default tasklistSets
