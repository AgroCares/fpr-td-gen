# FPR-TD-GEN

A package to determine what needs to be included in the Technical Documentation for a fertilising product.

## What
Producers of fertilising products can sell their product in the entire European Union by affixing the CE marking to their product. To do this, they need to demonstrate compliance with the Fertilising Product Regulation (FPR) which they do by compiling "Technical Documentation" (TD). Finding out what evidence needs to be in the TD can be laborious. This package helps to determine what needs to be included in the TD based on a minimum set of questions. After answering all questions, the user gets a checklist of all elements that must be present in the TD for the conformity assessment procedure.

This package provides the logic and the content but no UI. The package does not store or sent data to an external party and can be used freely under the EUPL-1.2 license.

## Installation
Make sure you have NodeJS installed and run then the following commands in the project folder

```javascript

npm install
npm run watch

```

The documentation can generated using:

```javascript

npm run document

```

## Usage
To start, initialise a new `Generator` object

```typescript

import { Generator } from 'fpr-td-gen'

const generator = new Generator()

```

Then, repeat the following three methods of generator to 1. determine whether all questions have been answered, 2. get the next question, and 3. save the answer:

```typescript

generator.allQuestionsAnswered() // returns boolean
generator.getNextQuestion()      // returns a Question object
generator.saveAnswer(answer)     // answer is stored in the generator object

```

Once all questions have been answered, the tasklist can be generated like:

```typescript

generator.getTechnicalDocumentationTaskList()

```

The generator object including the answers to questions, can be exported to a .json file, both while answering questions and when all questions have been answered. Of cource, importing a .json file is also possible.

```typescript

generator.saveToDisk('path/to/file.json')
generator.loadFromDisk('path/to/file.json')

```

## Contributing
You can contribute by adding or improving translations and by reporting or fixing bugs at the [FPR-TD-GEN github](https://github.com/AgroCares/fpr-td-gen/)

### Translations
Ideally the package works for the [24 languages of the EU](https://european-union.europa.eu/principles-countries-history/languages_en)
You can add a new language by making a pull request. The first step for adding is new language is adding a code for the new language to the `localesTypes` type in 'shared.types.ts' such as 'nl', 'en', or 'fr'. Thereafter, the translations of the new language can be added to the questions in 'question_sets.ts' and tasks in 'tasklist_sets.ts'.
Questions look like this and new translations can simply be added by adding new lines for the properties 'ask' (the question prompted to a user), 'placeholder' (an example answer that can be displayed for illustrative purpose), and 'help' (a description of the question):

```typescript

{
      id: 'Q1',
      type: 'text',
      ask: {
        nl: 'Wat is de naam van uw product?',
        en: 'What is the name of your product?'
      },
      placeholder: {
        nl: 'bijv. Nmestof Ultra',
        en: 'e.g. N fertiliser Ultra'
      },
      help: {
        nl: 'Dit is de naam van het product.',
        en: 'This is the name of the product.'
      },
      options: null,
      cmcQuestion: false
    }

```
Translations for tasks can be done in a similar  fashion, requiring a translation of the property 'taskName'. The properties 'taskDetails' and 'taskDescription' are optional.

### Bugs
If you find a bug, please report it at https://github.com/AgroCares/fpr-td-gen/issues

## License
Created by [Nutriënten Management Instituut](https://www.nmi-agro.nl)
Licensed under EUPL-1.2 ([European Union Public Licence V. 1.2](https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12))
Source code available at https://github.com/AgroCares/fpr-td-gen
![fpr-td-gen](logo_fpr_td_gen.png)