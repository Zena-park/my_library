import { type Address, parseAbi, Abi } from 'viem'

import { chain } from './chains.js'

export type ITAbi = {
  erc20: Abi,
  TON: Abi,
  WTON: Abi,
  Layer2Registry: Abi,
  DepositManager: Abi,
  SeigManager: Abi,
  Proxy: Abi,
  DAOCommittee : Abi,
  DAOAgendaManager: Abi,
  Coinage: Abi,
  Candidate: Abi
}
// Test accounts
export const accounts = [
  '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
  '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
  '0x15d34aaf54267db7d7c367839aaf71a00a2c6a65',
  '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
  '0x976EA74026E726554dB657fA54763abd0C3a0aa9',
  '0x14dC79964da2C08b23698B3D3cc7Ca32193d9955',
  '0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f',
  '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
] as const

// for `'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'`
export const privateKey =
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'


export const abi: ITAbi = {
  erc20: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),
  TON: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),
  WTON: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),

  Layer2Registry: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),

  DepositManager: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),

  SeigManager: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),

  Proxy: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),
  DAOCommittee: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),

  DAOAgendaManager: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),

  Coinage: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),

  Candidate: parseAbi([
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ])
} as const

const mainnetAddress = {
  TON: "0x2be5e8c109e2197D077D13A82dAead6a9b3433C5",
  WTON: "0xc4A11aaf6ea915Ed7Ac194161d2fC9384F15bff2",
  Layer2Registry: "0x7846c2248a7b4de77e9c2bae7fbb93bfc286837b",
  DepositManager: "0x0b58ca72b12f01fc05f8f252e226f3e2089bd00e",
  SeigManager: "0x0b55a0f463b6defb81c6063973763951712d0e5f",
  SwapProxy: "0x30e65B3A6e6868F044944Aa0e9C5d52F8dcb138d",
  DAOCommittee : "0xDD9f0cCc044B0781289Ee318e5971b0139602C26",
  DAOAgendaManager: "0xcD4421d082752f363E1687544a09d5112cD4f484"
} as const

const sepoliaAddress = {
  TON: "0xa30fe40285b8f5c0457dbc3b7c8a280373c40044",
  WTON: "0x79e0d92670106c85e9067b56b8f674340dca0bbd",
  Layer2Registry: "0xA0a9576b437E52114aDA8b0BC4149F2F5c604581",
  DepositManager: "0x90ffcc7F168DceDBEF1Cb6c6eB00cA73F922956F",
  SeigManager: "0x2320542ae933FbAdf8f5B97cA348c7CeDA90fAd7",
  SwapProxy: "0x690f994b82f001059e24d79292c3c476854b767a",
  DAOCommittee: "0xA2101482b28E3D99ff6ced517bA41EFf4971a386",
  DAOAgendaManager: "0x1444f7a8bC26a3c9001a13271D56d6fF36B44f08"
} as const

export const address = {
  ...mainnetAddress,
  mainnet: mainnetAddress,
  sepolia: sepoliaAddress,
  mainnetFork: mainnetAddress,
  sepoliaFork: sepoliaAddress,
} as const satisfies Record<keyof typeof mainnetAddress, Address> &
  Record<keyof typeof chain, Record<string, Address>>



export function getTonStakingAddress(name: string, chainId: number)
: Address {

    let addr
    switch(chainId) {
      case(chain.mainnet.id):
        addr =  address.mainnet
        break;
      case(chain.mainnetFork.id):
        addr =  address.mainnet
        break;
      case(chain.sepolia.id):
        addr =  address.sepolia
        break;
      case(chain.sepoliaFork.id):
        addr =  address.sepolia
        break;
    }

    if (addr == undefined) return '0x'

    switch(name) {
      case("TON"):
        return addr.TON
      case("WTON"):
        return addr.WTON
      case("Layer2Registry"):
        return addr.Layer2Registry
      case("DepositManager"):
        return addr.DepositManager
      case("SeigManager"):
        return addr.SeigManager
      case("SwapProxy"):
        return addr.SwapProxy
      case("DAOCommittee"):
        return addr.DAOCommittee
      case("DAOAgendaManager"):
        return addr.DAOAgendaManager;
      default:
        return '0x'
    }

  }

