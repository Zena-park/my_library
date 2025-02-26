"use client";

import type { ResolvedRegister, State } from '@wagmi/core'
import { Hydrate } from './hydrate.js'
import React, { createContext, createElement} from 'react'
// import type { ResolvedRegister, State } from '@wagmi/core'
// import {
//     TonStakingContext,
//     // TonStakingProviderProps
//     //, TonStakingContextActions, TonStakingContextType
// } from './context.ts'
import  {WagmiContext} from 'wagmi'

export const TonStakingContext = createContext<
  ResolvedRegister['config'] | undefined
>(undefined)

export type TonStakingProviderProps = {
  config: ResolvedRegister['config']
  initialState?: State | undefined
  reconnectOnMount?: boolean | undefined
}
// /**
//  * The main context provider
//  */
// export const TonStakingContextProvider: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
//   /**
//    * Using react hooks, set the default state
//    */
//   const [state, setState] = useState<TonStakingContextState>(DummyUser)

//   const actions: TonStakingContextActions = useMemo(
//     () => ({
//       change(key, value) {
//         setState((prev) => ({ ...prev, [key]: value }));
//       },
//       // changeTonStakingClient(key, value) {
//       //   console.log('changeTonStakingClient', key)
//       //   setState((prev) => ({ ...prev, [key]: value }));
//       // },
//       reset() {
//         setState(DummyUser);
//       },
//     }),
//     []
//   );

//   const value = useMemo(() => ({ state, actions }), [state, actions]);

//   return (
//     <TonStakingContext.Provider value={value}>{props.children}</TonStakingContext.Provider>
//   )
// }

export function TonStakingProvider(
  parameters: React.PropsWithChildren<TonStakingProviderProps>,
) {

  const { children, config } = parameters
  const props = { value: config }

  return createElement(
    Hydrate,
    parameters,
    createElement(
      TonStakingContext.Provider,
      props,
      createElement(
        WagmiContext.Provider,
        props,
        children)
    ),
  )
}