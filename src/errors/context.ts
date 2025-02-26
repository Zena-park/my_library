import { BaseError } from './base.js'

export type TonStakingProviderNotFoundErrorType = TonStakingProviderNotFoundError & {
  name: 'TonStakingProviderNotFoundError'
}
export class TonStakingProviderNotFoundError extends BaseError {
  override name = 'TonStakingProviderNotFoundError'
  constructor() {
    super('`useConfig` must be used within `TonStakingProvider`.', {
      docsPath: '/api/TonStakingProvider',
    })
  }
}
