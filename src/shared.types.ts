export type askType = string

export type fprVersionType = 'FPR 2019/1009'

export type idType = string

export type help = string

export type localesType = 'en' | 'nl'

export type placeholder = string

export type optionsType = Record<string, localesType>

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
  options: optionsType[] | null
}

export type questionSetsType = questionSetType[]

export interface technicalDocumentationType {
  locale: localesType
  fprVersion: fprVersionType
}

export type typesType = 'text' | 'select' | 'checkbox' | undefined

export type optionsIdType = string[] | undefined
