import type { fprType, fprVersionType } from './shared.types'

/**
 * Array of FPR versions {@link fprType}
 *
 * For each fprVersion, an array of general product questions must be specified.
 * These are the questions that must be asked about every product.
 * @internal
 */
const fprVersionSets: fprType[] =
[
  {
    fprVersion: 'FPR 2019/1009' as fprVersionType,
    generalProductQuestions: ['Q1', 'Q2', 'Q3'],
    cmcQuestions: ['Q4', 'Q5.1', 'Q5.2'],
    blendQuestions: ['Q7']
  }
]
export default fprVersionSets
