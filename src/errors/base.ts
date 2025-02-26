import { BaseError as CoreError } from '@wagmi/core'

import { getVersion } from '../utils/getVersion.js'

export type BaseErrorType = BaseError & { name: 'TonStakingError' }
export class BaseError extends CoreError {
  override name = 'TonStakingError'
  override get docsBaseUrl() {
    return 'https://wagmi.sh/react'
  }
  override get version() {
    return getVersion()
  }
}
