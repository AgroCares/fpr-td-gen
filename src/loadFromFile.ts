import { readFileSync, existsSync } from 'node:fs'
import { createHash } from 'node:crypto'

import Generator from './generator'

/** Load from JSON file to generator
* @param filePath - The path to where the JSON file is stored, include the filename. It can be generated using the saveToFile method {@link saveToFile}
* @returns A generator class with the specified properties {@link Generator}
* @internal
* @alpha
*/
function LoadFromFile (filePath: string): Generator {
  // Check if filePath is actual json and can be stored
  if (!filePath.endsWith('.json')) {
    throw new Error('Filepath must be a json file.')
  }
  if (!existsSync(filePath)) {
    throw new Error('Filepath does not exist')
  }

  // Load from disk
  const file = JSON.parse(readFileSync(filePath, 'utf8'))

  // Check hash of properties
  const properties = file.properties
  const propertiesHashOrginal = file.propertiesHash
  const propertiesHash = createHash('md5').update(JSON.stringify(properties)).digest('hex')
  if (propertiesHash !== propertiesHashOrginal) {
    throw new Error('Unable to load generator. The file has been modified after generation.')
  }

  // Create generator with properties from file
  const generator = new Generator(properties.locale, properties.fprVersion)

  // Set properties of file to generator
  if (properties.pfcDesignation !== undefined) {
    generator.pfcDesignation = properties.pfcDesignation
  }
  if (properties.allAnswers !== undefined) {
    Object.keys(properties.allAnswers).forEach(key => {
      const answer = properties.allAnswers[key]
      generator.allAnswers.set(key, answer)
    })
  }
  if (properties.nrOfComponents !== undefined) {
    generator.nrOfComponents = properties.nrOfComponents
  }
  if (properties.lastKeyComponentNr !== undefined) {
    generator.lastKeyComponentNr = properties.lastKeyComponentNr
  }
  if (properties.cmcAnswers !== undefined) {
    generator.cmcAnswers = properties.cmcAnswers
  }

  return generator
}

export default LoadFromFile
