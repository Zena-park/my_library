////////////////////////////////////////////////////////////////////////////////
// Context
////////////////////////////////////////////////////////////////////////////////

export {
  TonStakingProvider,
} from '../provider'

export {
  type TonStakingProviderProps,
  TonStakingContext,
} from '../context'

// export {
//   type UseTonStakingPublicClientParameters,
//   type UseTonStakingPublicClientReturnType,
//   useTonStakingPublicClient,
// } from '../hooks/useTonStakingPublicClient.js'

export {
  useReadTon,
} from '../hooks/useReadTon'


// biome-ignore lint/performance/noBarrelFile: entrypoint module
export {
  type WagmiProviderProps,
  WagmiContext,
  WagmiProvider,
  /** @deprecated Use `WagmiContext` instead */
  WagmiContext as Context,
  /** @deprecated Use `WagmiProvider` instead */
  WagmiProvider as WagmiConfig,
} from 'wagmi'

////////////////////////////////////////////////////////////////////////////////
// Errors
////////////////////////////////////////////////////////////////////////////////

export { type BaseErrorType, BaseError } from 'wagmi'

export {
  type WagmiProviderNotFoundErrorType,
  WagmiProviderNotFoundError,
} from 'wagmi'

////////////////////////////////////////////////////////////////////////////////
// Hooks
////////////////////////////////////////////////////////////////////////////////

export {
  type UseAccountParameters,
  type UseAccountReturnType,
  useAccount,
} from 'wagmi'

export {
  type UseAccountEffectParameters,
  useAccountEffect,
} from 'wagmi'

export {
  type UseBalanceParameters,
  type UseBalanceReturnType,
  useBalance,
} from 'wagmi'

export {
  type UseBlockParameters,
  type UseBlockReturnType,
  useBlock,
} from 'wagmi'

export {
  type UseBlockNumberParameters,
  type UseBlockNumberReturnType,
  useBlockNumber,
} from 'wagmi'

export {
  type UseBlockTransactionCountParameters,
  type UseBlockTransactionCountReturnType,
  useBlockTransactionCount,
} from 'wagmi'

export {
  type UseBytecodeParameters,
  type UseBytecodeReturnType,
  useBytecode,
} from 'wagmi'

export {
  type UseCallParameters,
  type UseCallReturnType,
  useCall,
} from 'wagmi'

export {
  type UseChainIdParameters,
  type UseChainIdReturnType,
  useChainId,
} from 'wagmi'

export {
  type UseChainsParameters,
  type UseChainsReturnType,
  useChains,
} from 'wagmi'

export {
  type UseClientParameters,
  type UseClientReturnType,
  useClient,
} from 'wagmi'

export {
  type UseConfigParameters,
  type UseConfigReturnType,
  useConfig,
} from 'wagmi'

export {
  type UseConnectParameters,
  type UseConnectReturnType,
  useConnect,
} from 'wagmi'

export {
  type UseConnectionsParameters,
  type UseConnectionsReturnType,
  useConnections,
} from 'wagmi'

export {
  type UseConnectorsParameters,
  type UseConnectorsReturnType,
  useConnectors,
} from 'wagmi'

export {
  type UseConnectorClientParameters,
  type UseConnectorClientReturnType,
  useConnectorClient,
} from 'wagmi'

export {
  type UseDeployContractParameters,
  type UseDeployContractReturnType,
  useDeployContract,
} from 'wagmi'

export {
  type UseDisconnectParameters,
  type UseDisconnectReturnType,
  useDisconnect,
} from 'wagmi'

export {
  type UseEnsAddressParameters,
  type UseEnsAddressReturnType,
  useEnsAddress,
} from 'wagmi'

export {
  type UseEnsAvatarParameters,
  type UseEnsAvatarReturnType,
  useEnsAvatar,
} from 'wagmi'

export {
  type UseEnsNameParameters,
  type UseEnsNameReturnType,
  useEnsName,
} from 'wagmi'

export {
  type UseEnsResolverParameters,
  type UseEnsResolverReturnType,
  useEnsResolver,
} from 'wagmi'

export {
  type UseEnsTextParameters,
  type UseEnsTextReturnType,
  useEnsText,
} from 'wagmi'

export {
  type UseEstimateFeesPerGasParameters,
  type UseEstimateFeesPerGasReturnType,
  useEstimateFeesPerGas,
  /** @deprecated Use `useEstimateFeesPerGas` instead */
  useEstimateFeesPerGas as useFeeData,
} from 'wagmi'

export {
  type UseEstimateGasParameters,
  type UseEstimateGasReturnType,
  useEstimateGas,
} from 'wagmi'

export {
  type UseEstimateMaxPriorityFeePerGasParameters,
  type UseEstimateMaxPriorityFeePerGasReturnType,
  useEstimateMaxPriorityFeePerGas,
} from 'wagmi'

export {
  type UseFeeHistoryParameters,
  type UseFeeHistoryReturnType,
  useFeeHistory,
} from 'wagmi'

export {
  type UseGasPriceParameters,
  type UseGasPriceReturnType,
  useGasPrice,
} from 'wagmi'

export {
  type UseInfiniteContractReadsParameters,
  type UseInfiniteContractReadsReturnType,
  useInfiniteReadContracts,
  /** @deprecated Use `useInfiniteReadContracts` instead */
  useInfiniteReadContracts as useContractInfiniteReads,
} from 'wagmi'

export {
  type UsePrepareTransactionRequestParameters,
  type UsePrepareTransactionRequestReturnType,
  usePrepareTransactionRequest,
} from 'wagmi'

export {
  type UseProofParameters,
  type UseProofReturnType,
  useProof,
} from 'wagmi'

export {
  type UsePublicClientParameters,
  type UsePublicClientReturnType,
  usePublicClient,
} from 'wagmi'

export {
  type UseReadContractParameters,
  type UseReadContractReturnType,
  useReadContract,
  /** @deprecated Use `useWriteContract` instead */
  useReadContract as useContractRead,
} from 'wagmi'

export {
  type UseReadContractsParameters,
  type UseReadContractsReturnType,
  useReadContracts,
  /** @deprecated Use `useWriteContract` instead */
  useReadContracts as useContractReads,
} from 'wagmi'

export {
  type UseReconnectParameters,
  type UseReconnectReturnType,
  useReconnect,
} from 'wagmi'

export {
  type UseSendTransactionParameters,
  type UseSendTransactionReturnType,
  useSendTransaction,
} from 'wagmi'

export {
  type UseSignMessageParameters,
  type UseSignMessageReturnType,
  useSignMessage,
} from 'wagmi'

export {
  type UseSignTypedDataParameters,
  type UseSignTypedDataReturnType,
  useSignTypedData,
} from 'wagmi'

export {
  type UseSimulateContractParameters,
  type UseSimulateContractReturnType,
  useSimulateContract,
} from 'wagmi'

export {
  type UseStorageAtParameters,
  type UseStorageAtReturnType,
  useStorageAt,
} from 'wagmi'

export {
  type UseSwitchAccountParameters,
  type UseSwitchAccountReturnType,
  useSwitchAccount,
} from 'wagmi'

export {
  type UseSwitchChainParameters,
  type UseSwitchChainReturnType,
  useSwitchChain,
} from 'wagmi'

export {
  type UseTokenParameters,
  type UseTokenReturnType,
  /** @deprecated Use `useReadContracts` instead */
  useToken,
} from 'wagmi'

export {
  type UseTransactionParameters,
  type UseTransactionReturnType,
  useTransaction,
} from 'wagmi'

export {
  type UseTransactionConfirmationsParameters,
  type UseTransactionConfirmationsReturnType,
  useTransactionConfirmations,
} from 'wagmi'

export {
  type UseTransactionCountParameters,
  type UseTransactionCountReturnType,
  useTransactionCount,
} from 'wagmi'

export {
  type UseTransactionReceiptParameters,
  type UseTransactionReceiptReturnType,
  useTransactionReceipt,
} from 'wagmi'

export {
  type UseVerifyMessageParameters,
  type UseVerifyMessageReturnType,
  useVerifyMessage,
} from 'wagmi'

export {
  type UseVerifyTypedDataParameters,
  type UseVerifyTypedDataReturnType,
  useVerifyTypedData,
} from 'wagmi'

export {
  type UseWalletClientParameters,
  type UseWalletClientReturnType,
  useWalletClient,
} from 'wagmi'

export {
  type UseWaitForTransactionReceiptParameters,
  type UseWaitForTransactionReceiptReturnType,
  useWaitForTransactionReceipt,
} from 'wagmi'

export {
  type UseWatchAssetParameters,
  type UseWatchAssetReturnType,
  useWatchAsset,
} from 'wagmi'

export {
  type UseWatchBlocksParameters,
  type UseWatchBlocksReturnType,
  useWatchBlocks,
} from 'wagmi'

export {
  type UseWatchBlockNumberParameters,
  type UseWatchBlockNumberReturnType,
  useWatchBlockNumber,
} from 'wagmi'

export {
  type UseWatchContractEventParameters,
  type UseWatchContractEventReturnType,
  useWatchContractEvent,
} from 'wagmi'

export {
  type UseWatchPendingTransactionsParameters,
  type UseWatchPendingTransactionsReturnType,
  useWatchPendingTransactions,
} from 'wagmi'

export {
  type UseWriteContractParameters,
  type UseWriteContractReturnType,
  useWriteContract,
  /** @deprecated Use `useWriteContract` instead */
  useWriteContract as useContractWrite,
} from 'wagmi'

////////////////////////////////////////////////////////////////////////////////
// Hydrate
////////////////////////////////////////////////////////////////////////////////

export {
  type HydrateProps,
  Hydrate,
} from 'wagmi'

////////////////////////////////////////////////////////////////////////////////
// @wagmi/core
////////////////////////////////////////////////////////////////////////////////

export {
  // Config
  type Connection,
  type Connector,
  type Config,
  type CreateConfigParameters,
  type PartializedState,
  type State,
  createConfig,
  // Connector
  type ConnectorEventMap,
  type CreateConnectorFn,
  createConnector,
  injected,
  mock,
  // Errors
  type ChainNotConfiguredErrorType,
  ChainNotConfiguredError,
  type ConnectorAlreadyConnectedErrorType,
  ConnectorAlreadyConnectedError,
  type ConnectorNotFoundErrorType,
  ConnectorNotFoundError,
  type ConnectorAccountNotFoundErrorType,
  ConnectorAccountNotFoundError,
  type ConnectorChainMismatchErrorType,
  ConnectorChainMismatchError,
  type ConnectorUnavailableReconnectingErrorType,
  ConnectorUnavailableReconnectingError,
  type ProviderNotFoundErrorType,
  ProviderNotFoundError,
  type SwitchChainNotSupportedErrorType,
  SwitchChainNotSupportedError,
  // Storage
  type CreateStorageParameters,
  type Storage,
  createStorage,
  noopStorage,
  // Transports
  custom,
  fallback,
  http,
  webSocket,
  unstable_connector,
  type Transport,
  // Types
  type Register,
  type ResolvedRegister,
  // Utilities
  cookieStorage,
  cookieToInitialState,
  deepEqual,
  deserialize,
  normalizeChainId,
  parseCookie,
  serialize,
} from '@wagmi/core'

////////////////////////////////////////////////////////////////////////////////
// Version
////////////////////////////////////////////////////////////////////////////////

export { version } from '../version.js'
