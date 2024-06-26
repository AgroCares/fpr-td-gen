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
 * @public
 */
export type fprVersionType = 'FPR 2019/1009'

/**
 * Type for categorising questions per FPR version
 * @remarks generalProductQuestions must be asked for all products,
 * cmcQuestions are iterable questions which may be asked for each component,
 * blendQuestions are questions specific for fertiling product blends (PFC 7) which do not need to give information on its component materials but on the fertiling products contained within the blend.
 * @public
 */
export interface fprType {
  fprVersion: fprVersionType
  generalProductQuestions: idType[]
  cmcQuestions: idType[]
  blendQuestions: idType[]
}

/**
 * The id of the question
 *
 * @typeParam idType - The id of the question
 * @public
 */
export type idType = string

/**
 * Helper text of a question
 *
 * @typeParam helpType - Explains the question in more detail
 * @public
 */
export type helpType = string

/**
 * The language selected to be used
 *
 * @typeParam localesType - The language selected to be used
 * @remarks Currently only English ('en') and Dutch are available ('nl')
 * @public
 */
export type localesType = 'en' | 'nl'

/**
 * Placeholder for answer
 *
 * @typeParam placeholderType - Provides a placeholder for the answer of a question
 * @public
 */
export type placeholderType = string | null

/**
 * Available options set for a question
 *
 * @typeParam optionsSetType - The available options set available to answer a question
 * @public
 */
export interface optionsSetType {
  value: string
  locale: Record<localesType, string>
}

/**
 * Available options for a question
 * @typeParam optionsType - The available options available to answer a question
 *
 * @public
 */
export interface optionsType {
  value: string
  label: string
}

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
  placeholder: placeholderType
  help: helpType
  options: optionsType[] | null
}

/**
 * The question set that contains the details of a question
 *
 * @typeParam questionSetType - The question set that contains the details of a question
 * @public
 */
export interface questionSetType {
  id: string
  type: typesType
  ask: Record<localesType, string>
  placeholder: Record<localesType, string> | null
  help: Record<localesType, string>
  options: optionsSetType[] | null
  cmcQuestion: boolean
}

/**
 * The items that need to be contained in the technical documentation
 *
 * @typeParam tasklistSetType - The question set that contains the details of a question
 * @public
 */
export interface tasklistSetType {
  taskId: string
  applicableTo: {
    id: idType
    answer: answerType | null // an answer value to a boolean or select question that decides whether a quesion is applicable
  }
  taskName: Record<localesType, string>
  taskDetails: Record<localesType, string> | null
  taskUrl: Record<localesType, string> | null
}

/**
 * A collection of various entries for questionsSet
 *
 * @typeParam questionSetsType - A collection of various entries for questionsSet {@link questionSetType}
 * @public
 */
export type questionSetsType = questionSetType[]

/**
 * A collection of various entries for tasklist
 *
 * @typeParam tasklistSetsType - A collection of various entries for questionsSet {@link questionSetType}
 * @internal
 */
export type tasklistSetsType = tasklistSetType[]

/**
 * The technical documentation of the FPR
 *
 * @typeParam technicalDocumentationType - The technical documentation of the FPR
 * @public
 */
export interface technicalDocumentationType {
  locale: localesType
  fprVersion: fprVersionType
  pfcDesignation: pfcType
}

/**
 * The type of question
 *
 * @typeParam typesType - The type of question
 * @remarks Currently only `text`, `select`, `checkbox` and `multitext` are allowed
 * @public
 */
export type typesType = 'text' | 'select' | 'checkbox' | 'multitext' | undefined

/**
 * The id of the option from a `select` question
 *
 * @typeParam optionsIdType - The id of the option
 * @public
 */
export type optionsIdType = string[] | undefined

/**
 * Array of values allowed for PFCs
 *
 * @public
 * @see {@link pfcType}
 */
export const pfcDesignations = [undefined, 'PFC 1.A.I', 'PFC 1.A.II', 'PFC 1.B.I', 'PFC 1.B.II', 'PFC 1.C.I.a.i', 'PFC 1.C.I.a.i.A', 'PFC 1.C.I.a.ii', 'PFC 1.C.I.a.ii.A', 'PFC 1.C.I.b.i', 'PFC 1.C.I.b.ii', 'PFC 1.C.II.a', 'PFC 1.C.II.b', 'PFC 2', 'PFC 3.A', 'PFC 3.B', 'PFC 4', 'PFC 5.A', 'PFC 5.B', 'PFC 5.C', 'PFC 6.A', 'PFC 6.B', 'PFC 7'] as const

/**
 * The PFC designation
 *
 * @typeParam pfcType - The PFC designation
 * @remarks The possible values are:
 *   * `undefined`
 *   * `PFC 1.A.I`
 *   * `PFC 1.A.II`
 *   * `PFC 1.B.I`
 *   * `PFC 1.B.II`
 *   * `PFC 1.C.I.a.i`
 *   * `PFC 1.C.I.a.i.A`
 *   * `PFC 1.C.I.a.ii`
 *   * `PFC 1.C.I.a.ii.A`
 *   * `PFC 1.C.I.b.i`
 *   * `PFC 1.C.I.b.ii`
 *   * `PFC 1.C.II.a`
 *   * `PFC 1.C.II.b`
 *   * `PFC 2`
 *   * `PFC 3.A`
 *   * `PFC 3.B`
 *   * `PFC 4`
 *   * `PFC 5.A`
 *   * `PFC 5.B`
 *   * `PFC 5.C`
 *   * `PFC 6.A`
 *   * `PFC 6.B`
 *   * `PFC 7`
 * @public
 */
export type pfcType = typeof pfcDesignations[number]

/**
 * Array of values allowed for CMCs
 *
 * @public
 * @see {@link cmcType}
 */
export const cmcDesginations = [undefined, 'CMC 1', 'CMC 2', 'CMC 3', 'CMC 4', 'CMC 5', 'CMC 6', 'CMC 7'] as const

/**
 * The CMC designation
 *
 * @typeParam cmcType - The CMC designation
 * @remarks The possible values are:
 *   * `undefined`
 *   * `CMC 1`
 *   * `CMC 2`
 *   * `CMC 3`
 *   * `CMC 4`
 *   * `CMC 5`
 *   * `CMC 6`
 *   * `CMC 7`
 * @public
 */
export type cmcType = typeof cmcDesginations[number]

export type answerSet = Map<idType, answerType>

/**
 * The answer to a question
 *
 * @typeParam answerType - The answer to a question
 * @remarks Currently only `string` and `string[]` are allowed
 * @public
 */

export type answerType = string | string[] | boolean

/**
 * Type of the technicaldocumenatation task list
 *
 * @typeParam technicalDocumentationTaskListType - An array for {@link technicalDocumentationTask}
 * @see {@link  technicalDocumentationTask}
 * @public
 */
export type technicalDocumentationTaskListType = technicalDocumentationTask[]

/**
 * Type of technicalDocumentationTask
 *
 * typeParam technicalDocumentationTask - An object with the properties of a task for the Technical Documentation
 * @public
 */
export interface technicalDocumentationTask {
  applicableElement: 'product' | string
  taskName: string
  taskDetails: string | null
  taskUrl: string | null
}
