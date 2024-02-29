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
    answer: ['PFC 1.A.I', 'PFC 1.B.I', 'PFC 1.C.I.a', 'PFC 1.C.I.a.i', 'PFC 1.C.I.a.ii', 'PFC 1.C.I.a.ii.A']
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
    answer: ['PFC 1.A.II', 'PFC 1.B.II', 'PFC 1.C.b.i', 'PFC 1.C.b.ii', 'PFC 1.C.I.a.i.A', 'PFC 1.C.I.b.i', 'PFC 1.C.I.b.ii']
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
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Als het gehalte aan organische koolstof >1 massaprocent is. Voeg ofwel een beschrijving van de herkomst van de organische koolstof toe om aan te tonen dat het niet hoeft te voldoen aan de criteria voor microörganismen of een analyserapport om te bewijzen dat het voldoet aan de criteria voor microörganismen.',
      en: 'If the organic carbon content >1% by mass. Include either a description of the origin of the organic carbon to show it does not need to pass the pathogen criteria or an analysis report to prove that is passes the criteria for pathogens'
    },
    answer: ['PFC 1.C.I.a.i', 'PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii', 'PFC 1.C.I.a.ii.A', 'PFC 1.C.I.b.i', 'PFC 1.C.I.b.ii', 'PFC 1.C.II.a', 'PFC 1.C.II.b']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product moet tenminste een minumum hoeveelheid N, P, K, Ca, Mg, Na of S bevatten of een combinatie van één van N, P, K en één van Ca, Mg, Na of S. Het totaal gehalte macronutriënt moet tenminste 18% zijn.',
      en: 'Demonstrate that the product contains at least minimum amounts of N, P, K, Ca, Mg, Na, or S OR one of N, P, K and one of Ca, Mg, Na, or S. For a total of at least 18%'
    },
    answer: ['PFC 1.C.I.a.i']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product voldoet aan de minimale hoeveelheden van tenminste twee van N, P en K of tenminste twee van Ca, Mg, Na en S. Met een totaal van tenminste 18%. Het totaal Na gehalte (uitgedrukt in Na2O) moet minder zijn dan 40% op massa basis.',
      en: 'Demonstrate that the product contains at least minimum amounts of at least two of N, P, K or at least two of Ca, Mg, Na, and S. For a total of at least 18%. Total Na content (Na2O) must be <= 40% by mass'
    },
    answer: ['PFC 1.C.I.a.ii']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product tenminste 28% ammonium nitraat (NH4NO3) bevat op massa basis.',
      en: 'Demonstrate that the prodcut contains at least 28% of ammonium nitrate (NH4NO3) by mass'
    },
    answer: ['PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Geen van de bestandsdelen in het product mag reageren met ammonium nitraat.',
      en: 'No compounds in the product may react with ammonium nitrate.'
    },
    answer: ['PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Geen van de bestandsdelen in het product mag reageren met ammonium nitraat.',
      en: 'No compounds in the product may react with ammonium nitrate.'
    },
    answer: ['PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product mag alleen verpakt op de markt gebracht worden. Het zegel of de opening van de verpakking moet zichtbaar en onherstelbaar worden beschadigd bij openen.',
      en: 'The product may only be made available in packaged form. The seal or opening must be visibly and irreparably damaged upon opening.'
    },
    answer: ['PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product voldoet aan de olie retentie criteria.',
      en: 'Demonstrate that the product complies with the oil retention criteria.'
    },
    answer: ['PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product voldoet aan de detonatieveiligheidscriteria.',
      en: 'Demonstrate that the product complies with the detonation safety criteria.'
    },
    answer: ['PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product voldoet aan de ontbrandbaar materiaal veiligheidscriteria',
      en: 'Demonstrate that the product complies with the combustable material safety criteria.'
    },
    answer: ['PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat een oplossing van 10 g van het het product in 100 ml water een pH heeft van tenminste 4,5.',
      en: 'Demonstrate that a solution of 10 g of the product in 100 ml of water has a pH of at least 4.5.'
    },
    answer: ['PFC 1.C.I.a.i.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat niet meer dan 5% door een 1 mm zeef past en niet meer dan 3% door een 0,5 mm zeef op massa basis.',
      en: 'Demonstrate that not more than 5% by mass passess through a 1 mm mesh sieve, and not more than 3% by mass passess through a 0,5 mm mesh sieve.'
    },
    answer: ['PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het Cu gehalte niet hoger is dan 10 mg/kg en het Cl gehalte niet hoger is dan 200 mg/kg.',
      en: 'Demonstrate that the Cu content does not exceed 10 mg/kg and that the Cl content does not exceed 200 mg/kg.'
    },
    answer: ['PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product moet tenminste een minumum hoeveelheid N, P, K, Ca, Mg, Na of S bevatten of een combinatie van één van N, P, K en één van Ca, Mg, Na of S. Het totaal gehalte macronutriënt moet tenminste 7% zijn. Echter, het gehalte Na2O mag niet meer zijn dan 20% op massa basis.',
      en: 'Demonstrate that the product contains at least minimum amounts of N, P, K, Ca, Mg, Na, or S OR one of N, P, K and one of Ca, Mg, Na, or S. For a total of at least 7%. However, the Na2O content should not exceed 20% on a mass basis.'
    },
    answer: ['PFC 1.C.I.b.i', 'PFC 1.C.I.b.ii']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product planten of paddestoelen van micronutriënten voorziet (B, Co, Cu, Fe, Mn, Mo, Zn).',
      en: 'Demonstrate that the product provides plants or mushrooms with micronutrients (B, Co, Cu, Fe, Mn, Mo, Zn).'
    },
    answer: ['PFC 1.C.II.a', 'PFC 1.C.II.b']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product moet verpakt zijn.',
      en: 'The product must be packaged.'
    },
    answer: ['PFC 1.C.II.a', 'PFC 1.C.II.b']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product niet de limieten voor As, Cd, Pb, Hg en Ni overschreid gegeven het gehalte micronutrient.',
      en: 'Demonstrate that the product does not exceed the limits for As, Cd, Pb, Hg and Ni given the micronutrient content.'
    },
    answer: ['PFC 1.C.II.a', 'PFC 1.C.II.b']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product mag slechts één aangegeven micronutriënt bevatten.',
      en: 'The product must only have one declared micronutrient.'
    },
    answer: ['PFC 1.C.II.a']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product voldoet aan de beschrijving van één van de types beschreven in de tabel in Annex I PFC 1(C)(II)(a)2.',
      en: 'The product meets the description of one of the types described in the table in Annex I PFC 1(C)(II)(a)2.'
    },
    answer: ['PFC 1.C.II.a']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product bevat tenminste twee aangegeven micronutriënten.',
      en: 'The product contains at least two declared micronutrients.'
    },
    answer: ['PFC 1.C.II.b']
  },
  {
    taskId: 22,
    id: 'Q2',
    task: {
      nl: 'Indien het product vloeibaar is, bevat het tenminste 2% micronutrient op massa basis of 5% indien het product in vaste vorm is.',
      en: 'If the product is liquid, it contains at least 2% micronutrient on a mass basis or 5% if the product is in solid form.'
    },
    answer: ['PFC 1.C.II.b']
  },
  // Liming material related tasks
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product de grenswaarden voor Cd, Cr VI, Hg, Ni, Pb, As, Cu, Zn niet overschrijdt.',
      en: 'Demonstrate that the product does not exceed limits for Cd, Cr VI, Hg, Ni, Pb, As, Cu, Zn.'
    },
    answer: ['PFC 2']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product een minimale neutraliserende waarde heeft van 15 (equivalent CaO) of 9 (equivalent HO-).',
      en: 'Demonstrate that the product has a minimum neutralising value of 15 (equivalent CaO) or 9 (equivalent HO-)'
    },
    answer: ['PFC 2']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Voeg een testverslag toe van de zoutzuurtest of incubatietest om de reactiviteit aan te tonen.',
      en: 'Include a report on the hydrochloric acid test or incubation test to demonstrate the reactivity.'
    },
    answer: ['PFC 2']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Met uitzondering van gebrande kalk, kalkkorrels en krijt, moet worden aangetoond dat ten minste 70% van de deeltjes kleiner is dan 1 mm.',
      en: 'Except for burnt lime, granulated liming materials and chalk, demonstrate that at least 70% of the particles is smaller than 1 mm.'
    },
    answer: ['PFC 2']
  },
  // soil improvers and growing media
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat ten minste 95% van het materiaal van het product uitsluitend van biologische oorsprong is.',
      en: 'Demonstrate that at least 95% of the product\'s material is solely of biological origin.'
    },
    answer: ['PFC 3.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product een droge stofgehalte van tenminste 20% heeft.',
      en: 'Demonstrate that the product has a dry matter content of at least 20%.'
    },
    answer: ['PFC 3.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product een organisch koolstofgehalte heeft van minstens 7,5 massaprocent.',
      en: 'Demonstrate that the product has an organic carbon content of at least 7,5 % by mass.'
    },
    answer: ['PFC 3.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product niet de limieten voor Cd, Cr VI, Hg, Ni, Pb, As, Cu, Zn en pathogenen overschreidt.',
      en: 'Demonstrate that the product does not exceed the limits for Cd, Cr VI, Hg, Ni, Pb, As, Cu, Zn and pathogens.'
    },
    answer: ['PFC 3.A', 'PFC 3.B', 'PFC 4']
  },
  // Inhibitors
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product de omzetting van NH3 in NO2 remt.',
      en: 'Demonstrate that the product inhibits the conversion of NH3 to NO2.'
    },
    answer: ['PFC 5.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product de snelheid van ammoniakale stikstofoxidatie vertraagt gedurende 14 dagen na toepassing.',
      en: 'Demonstrate that the product slows the rate of ammoniacal nitrogen oxidation during 14 days after application.'
    },
    answer: ['PFC 5.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product de omzetting van nitraat in N2 vertraagt of blokkeert zonder de oxidatie van ammoniumstikstof te beïnvloeden.',
      en: 'Demonstrate that the product slows or blocks the conversion of nitrate to N2 without affecting the oxidation of ammoniacal nitrogen.'
    },
    answer: ['PFC 5.B']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product de hydrolyse van ureum met 20% vermindert in vergelijking met een onbehandelde controle.',
      en: 'Demonstrate that the product has a 20% reduction in hydrolysation of urea compared to an untreated control.'
    },
    answer: ['PFC 5.C']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan dat het product de grenswaarden voor Cd, Cr VI, Hg, Ni, Pb, As, Cu en Zn niet overschrijdt.',
      en: 'Demonstrate that the product does not exceed limits for Cd, Cr VI, Hg, Ni, Pb, As, Cu, and Zn.'
    },
    answer: ['PFC 6.A', 'PFC 6.B']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Vermeld op het etiket op welke planten de geclaimde functies van toepassing zijn.',
      en: 'Indicate on the label, the plants to which the claimed functions apply.'
    },
    answer: ['PFC 6.A', 'PFC 6.B']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product mag niet de grenswaarden voor pathogenen overschreiden.',
      en: 'The product must not exceed limits for pathogens.'
    },
    answer: ['PFC 6.A', 'PFC 6.B']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product moet ten minste één van de toegestane micro-organismen bevatten en als het vloeibaar is, moet de pH optimaal zijn voor de aanwezige micro-organismen.',
      en: 'The product must contain at least one of the allowed micro-organisms and when liquid, must be at optimal pH for the contained micro-organisms.'
    },
    answer: ['PFC 6.A']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Het product moet ten minste twee CE-gemarkeerde bemestingsproducten bevatten.',
      en: 'The product must contain at least two CE marked fertilising products.'
    },
    answer: ['PFC 7']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Toon aan of verklaar dat het mengen van de bemestingsproducten mag de aard van het product niet veranderen. Opslag en gebruik van het mengsel heeft geen negatief effect op de gezondheid of veiligheid van mensen, dieren of planten of op het milieu.',
      en: 'Demonstrate or declare that blending the fertilising products may not change the nature of the product. Storage and usage of the blend does not have a negative effect on human, animal, or plant health or safety or the environment.'
    },
    answer: ['PFC 7']
  },
  {
    taskId: 20,
    id: 'Q2',
    task: {
      nl: 'Als de blend een inhibitor bevat, is de inhibitor aanwezig in een zodanige hoeveelheid dat de blend voldoet aan de reductiedrempels die zijn vastgesteld voor inhibitors.',
      en: 'When the blend contains an inhibitor, the inhibitor is present in such a quantity that the blend meets the reduction thresholds set for inhibitors.'
    },
    answer: ['PFC 7']
  }
]

export default tasklistSets
