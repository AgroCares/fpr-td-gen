import { readFileSync, existsSync } from 'node:fs'
import { createHash } from 'node:crypto'

import Generator from './generator'

/** Load from JSON file to generatot
* @param filePath - The file path for where the JSON is stored. It can be generated using the saveToDisk method {@link saveToDisk}
* @returns A generator class with the specified properties {@link Generator}
* @internal
* @alpha
*/
function loadFromDisk (filePath: string): Generator {
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

  return generator
}

export default loadFromDisk
