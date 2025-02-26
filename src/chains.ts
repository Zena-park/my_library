import type { Compute } from '@wagmi/core/internal'
import {
  type Chain as viem_Chain,
  mainnet as viem_mainnet,
  sepolia as viem_sepolia,
} from 'viem/chains'

import { getRpcUrls } from './utils.js'

type Fork = { blockNumber: bigint; url: string }

export type Chain = Compute<
  viem_Chain & {
    fork: Fork
    port: number
  }
>

const mainnetFork = {
  ...viem_mainnet,
  ...getRpcUrls({ port: 8546 }),
  fork: {
    blockNumber: 21878043n,
    url: process.env.VITE_MAINNET_FORK_URL ?? 'https://eth.merkle.io',
  },
} as const satisfies Chain

export const sepoliaFork = {
  ...viem_sepolia,
  ...getRpcUrls({ port: 8547 }),
  fork: {
    blockNumber: 7738446n,
    url: process.env.VITE_SEPOLIA_FORK_URL ?? 'https://sepolia.drpc.org',
  },
} as const satisfies Chain

export const chain = {
  mainnet: viem_mainnet,
  sepolia: viem_sepolia,
  mainnetFork,
  sepoliaFork,
}


