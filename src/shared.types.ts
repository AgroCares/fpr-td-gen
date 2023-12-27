export type askType = string

export type fprVersionType = 'FPR 2019/1009'

export type idType = string

export type help = string

export type localesType = 'en' | 'nl'

export type placeholder = string

export interface optionsType {
  value: string
  locale: Record<localesType, string>
}

export interface questionType {
  id: idType
  type: typesType
  ask: askType
  placeholder: string | null
  help: string
  options: Record<string, string> | null
}

export interface questionSetType {
  id: string
  type: typesType
  ask: Record<localesType, string>
  placeholder: Record<localesType, string> | null
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
