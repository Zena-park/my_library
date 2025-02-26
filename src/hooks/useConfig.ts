'use client'

import type { Config, ResolvedRegister } from '@wagmi/core'
import { useContext } from 'react'

import { TonStakingContext } from '../context.js'
import { TonStakingProviderNotFoundError } from '../errors/context'
import type { ConfigParameter } from '../types/properties.js'

export type UseConfigParameters<config extends Config = Config> =
  ConfigParameter<config>

export type UseConfigReturnType<config extends Config = Config> = config

export function useConfig<config extends Config = ResolvedRegister['config']>(
  parameters: UseConfigParameters<config> = {},
): UseConfigReturnType<config> {
  const config = parameters.config ?? useContext(TonStakingContext)
  if (!config) throw new TonStakingProviderNotFoundError()
  return config as UseConfigReturnType<config>
}
