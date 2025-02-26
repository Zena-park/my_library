'use client'

import type { ResolvedRegister, State  } from '@wagmi/core'
import React from 'react'
// import { sepolia, mainnet} from 'wagmi/chains'
// import { Hydrate } from './hydrate.js'
// import { config } from './config.js'

export type TonStakingProviderProps = {
  config: ResolvedRegister['config']
  initialState?: State | undefined
  reconnectOnMount?: boolean | undefined
}

// The dummy user object used for this example
// export const DummyUser: TonStakingProviderProps = {
//   config:  {config: ({chains: [sepolia, mainnet], http: []})},
//   initialState: undefined,
//   reconnectOnMount: undefined,
//   // tonStakingClient: undefined,
//   // tonStakingContracts: undefined
// }

export interface TonStakingContextActions {
    change(
      key: keyof TonStakingProviderProps,
      value: number | string | ResolvedRegister['config'] | State | boolean | null ): void;
    // changeTonStakingClient(key: keyof UserContextState, value: ITonStakingClient | null ): void;
    reset(): void;
}

export interface TonStakingContextType {
    state: TonStakingProviderProps;
    actions: TonStakingContextActions;
}

/**
 * Creating the state context for the provider
 */
// export const UserContext = React.createContext<AppState>(defaultState)
export const TonStakingContext = React.createContext<TonStakingProviderProps | null>(null);

// export const TonStakingContext = React.createContext<TonStakingContextType | null>(null);