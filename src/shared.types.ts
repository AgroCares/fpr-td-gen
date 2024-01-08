/**
 * The question to be asked
 *
 * @typeParam askType - The question to be asked
 * @alpha
 */
export type askType = string

/**
 * The version of the FPR to be used
 *
 * @typeParam fprVersionType - The version of the FPR to be used
 * @remarks Currently only `FPR 2019/100` is allowed
 * @alpha
 */
export type fprVersionType = 'FPR 2019/1009'

/**
 * The id of the question
 *
 * @typeParam idType - The id of the question
 * @alpha
 */
export type idType = string

/**
 * Helper text of a question
 *
 * @typeParam helpType - Explains the question in more detail
 * @alpha
 */
export type helpType = string

/**
 * The language selected to be used
 *
 * @typeParam localesType - The language selected to be used
 * @remarks Currently only English ('en') and Dutch are available ('nl')
 * @alpha
 */
export type localesType = 'en' | 'nl'

/**
 * Placeholder for answer
 *
 * @typeParam placeholderType - Provides a placeholder for the answer of a question
 * @alpha
 */
export type placeholderType = string

export interface optionsSetType {
  value: string
  locale: Record<localesType, string>
}
/**
 * Available options for a question
 * @typeParam optionsType - The available optiosn available to answer a question
 *
 * @alpha
 */

export interface optionsType {
  value: string
  label: string
}
/**
 * The question to be asked
 *
 * @typeParam questionType - The question to be asked
 * @alpha
 */
export interface questionType {
  id: idType
  type: typesType
  ask: askType
  placeholder: placeholderType
  help: helpType
  options: optionsType[] | null
}

/**
 * The question set that contains the details of a question
 *
 * @typeParam questionSetType - The question set that contains the details of a question
 * @internal
 */
export interface questionSetType {
  id: string
  type: typesType
  ask: Record<localesType, string>
  placeholder: Record<localesType, string> | null
  help: Record<localesType, string>
  options: optionsSetType[] | null
}

/**
 * A collection of various entries for questionsSet
 *
 * @typeParam questionSetsType - A collection of various entries for questionsSet {@link questionSetType}
 * @internal
 */
export type questionSetsType = questionSetType[]

/**
 * The technical documentation of the FPR
 *
 * @typeParam technicalDocumentationType - The technical documentation of the FPR
 * @alpha
 */
export interface technicalDocumentationType {
  locale: localesType
  fprVersion: fprVersionType
}

/**
 * The type of question
 *
 * @typeParam typesType - The type of question
 * @remarks Currently only `text`, `select` and `checkbox` are allowed
 * @alpha
 */
export type typesType = 'text' | 'select' | 'checkbox' | 'multitext' | undefined

export type optionsIdType = string[] | undefined
