/**
 * The question to be asked
 *
 * @typeParam askType - The question to be asked
 * @public
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
 * @beta
 */
export type idType = string

export type help = string

/**
 * The language selected to be used
 *
 * @typeParam localesType - The language selected to be used
 * @remarks Currently only English ('en') and Dutch are available ('nl')
 * @public
 */
export type localesType = 'en' | 'nl'

export type placeholder = string

export type optionsType = string[]

/**
 * The question to be asked
 *
 * @typeParam questionType - The question to be asked
 * @public
 */
export interface questionType {
  id: idType
  type: typesType
  ask: askType
  placeholder: string
  help: string
  options: string[] | null
}

export interface questionSetType {
  id: string
  type: typesType
  ask: Record<localesType, string>
  placeholder: Record<localesType, string>
  help: Record<localesType, string>
  options: Record<localesType, optionsType> | null
}

export type questionSetsType = questionSetType[]

export interface technicalDocumentationType {
  locale: localesType
  fprVersion: fprVersionType
}

export type typesType = 'text' | 'select' | 'checkbox' | undefined
