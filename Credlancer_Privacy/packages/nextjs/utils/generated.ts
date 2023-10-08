import {
  UseContractEventConfig,
  UseContractReadConfig,
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useContractEvent,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi'
import { PrepareWriteContractResult, ReadContractResult, WriteContractMode } from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TalentLayerID
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const talentLayerIdABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'HandleContainsInvalidCharacters' },
  { type: 'error', inputs: [], name: 'HandleFirstCharInvalid' },
  { type: 'error', inputs: [], name: 'HandleLengthInvalid' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousAdmin', internalType: 'address', type: 'address', indexed: false },
      { name: 'newAdmin', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address', indexed: true }],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'profileId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'newCid', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'CidUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'profileId', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'delegate', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'DelegateAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'profileId', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'delegate', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'DelegateRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint8', type: 'uint8', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      { name: 'profileId', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'handle', internalType: 'string', type: 'string', indexed: false },
      { name: 'platformId', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'fee', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'mintFee', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'MintFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'mintStatus', internalType: 'enum TalentLayerID.MintStatus', type: 'uint8', indexed: false }],
    name: 'MintStatusUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'price', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'ShortHandlesMaxPriceUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address', indexed: false }],
    name: 'TrustedForwarderAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address', indexed: false }],
    name: 'TrustedForwarderRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_profileId', internalType: 'uint256', type: 'uint256' },
      { name: '_delegate', internalType: 'address', type: 'address' },
    ],
    name: 'addDelegate',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_forwarder', internalType: 'address', type: 'address' }],
    name: 'addTrustedForwarder',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_platformId', internalType: 'uint256', type: 'uint256' },
      { name: '_userAddress', internalType: 'address', type: 'address' },
      { name: '_handle', internalType: 'string', type: 'string' },
    ],
    name: 'freeMint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_handle', internalType: 'string', type: 'string' }],
    name: 'getHandlePrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_address', internalType: 'address', type: 'address' }],
    name: 'getOriginatorPlatformIdByAddress',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'hasActivity',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'ids',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_talentLayerPlatformIdAddress', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_profileId', internalType: 'uint256', type: 'uint256' },
      { name: '_address', internalType: 'address', type: 'address' },
    ],
    name: 'isDelegate',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_profileId', internalType: 'uint256', type: 'uint256' },
      { name: '_address', internalType: 'address', type: 'address' },
    ],
    name: 'isOwnerOrDelegate',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'isServiceContract',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_profileId', internalType: 'uint256', type: 'uint256' }],
    name: 'isValid',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_address', internalType: 'address', type: 'address' },
      { name: '_handle', internalType: 'string', type: 'string' },
      { name: '_proof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'isWhitelisted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: '_platformId', internalType: 'uint256', type: 'uint256' },
      { name: '_handle', internalType: 'string', type: 'string' },
    ],
    name: 'mint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'mintFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: '_address', internalType: 'address', type: 'address' },
      { name: '_platformId', internalType: 'uint256', type: 'uint256' },
      { name: '_handle', internalType: 'string', type: 'string' },
    ],
    name: 'mintForAddress',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'mintStatus',
    outputs: [{ name: '', internalType: 'enum TalentLayerID.MintStatus', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_tokenId1', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenId2', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ownersOf',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'profiles',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'handle', internalType: 'string', type: 'string' },
      { name: 'platformId', internalType: 'uint256', type: 'uint256' },
      { name: 'dataUri', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_profileId', internalType: 'uint256', type: 'uint256' },
      { name: '_delegate', internalType: 'address', type: 'address' },
    ],
    name: 'removeDelegate',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_forwarder', internalType: 'address', type: 'address' }],
    name: 'removeTrustedForwarder',
    outputs: [],
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'renounceOwnership', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_profileId', internalType: 'uint256', type: 'uint256' }],
    name: 'setHasActivity',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_address', internalType: 'address', type: 'address' },
      { name: '_isServiceContract', internalType: 'bool', type: 'bool' },
    ],
    name: 'setIsServiceContract',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'root', internalType: 'bytes32', type: 'bytes32' }],
    name: 'setWhitelistMerkleRoot',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
    name: 'takenHandles',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'talentLayerPlatformIdContract',
    outputs: [{ name: '', internalType: 'contract ITalentLayerPlatformID', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_mintFee', internalType: 'uint256', type: 'uint256' }],
    name: 'updateMintFee',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_mintStatus', internalType: 'enum TalentLayerID.MintStatus', type: 'uint8' }],
    name: 'updateMintStatus',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_profileId', internalType: 'uint256', type: 'uint256' },
      { name: '_newCid', internalType: 'string', type: 'string' },
    ],
    name: 'updateProfileData',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_shortHandlesMaxPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'updateShortHandlesMaxPrice',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newImplementation', internalType: 'address', type: 'address' }],
    name: 'upgradeTo',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: '_platformId', internalType: 'uint256', type: 'uint256' },
      { name: '_handle', internalType: 'string', type: 'string' },
      { name: '_proof', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'whitelistMint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'withdraw', outputs: [] },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__.
 */
export function useTalentLayerIdRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>, 'abi'> = {} as any) {
  return useContractRead({ abi: talentLayerIdABI, ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useTalentLayerIdBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"getApproved"`.
 */
export function useTalentLayerIdGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'getApproved', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"getHandlePrice"`.
 */
export function useTalentLayerIdGetHandlePrice<
  TFunctionName extends 'getHandlePrice',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'getHandlePrice', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"getOriginatorPlatformIdByAddress"`.
 */
export function useTalentLayerIdGetOriginatorPlatformIdByAddress<
  TFunctionName extends 'getOriginatorPlatformIdByAddress',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: talentLayerIdABI,
    functionName: 'getOriginatorPlatformIdByAddress',
    ...config,
  } as UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"hasActivity"`.
 */
export function useTalentLayerIdHasActivity<
  TFunctionName extends 'hasActivity',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'hasActivity', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"ids"`.
 */
export function useTalentLayerIdIds<
  TFunctionName extends 'ids',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'ids', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useTalentLayerIdIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: talentLayerIdABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"isDelegate"`.
 */
export function useTalentLayerIdIsDelegate<
  TFunctionName extends 'isDelegate',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'isDelegate', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"isOwnerOrDelegate"`.
 */
export function useTalentLayerIdIsOwnerOrDelegate<
  TFunctionName extends 'isOwnerOrDelegate',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: talentLayerIdABI,
    functionName: 'isOwnerOrDelegate',
    ...config,
  } as UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"isServiceContract"`.
 */
export function useTalentLayerIdIsServiceContract<
  TFunctionName extends 'isServiceContract',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: talentLayerIdABI,
    functionName: 'isServiceContract',
    ...config,
  } as UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"isTrustedForwarder"`.
 */
export function useTalentLayerIdIsTrustedForwarder<
  TFunctionName extends 'isTrustedForwarder',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: talentLayerIdABI,
    functionName: 'isTrustedForwarder',
    ...config,
  } as UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"isValid"`.
 */
export function useTalentLayerIdIsValid<
  TFunctionName extends 'isValid',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'isValid', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"isWhitelisted"`.
 */
export function useTalentLayerIdIsWhitelisted<
  TFunctionName extends 'isWhitelisted',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'isWhitelisted', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"mintFee"`.
 */
export function useTalentLayerIdMintFee<
  TFunctionName extends 'mintFee',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'mintFee', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"mintStatus"`.
 */
export function useTalentLayerIdMintStatus<
  TFunctionName extends 'mintStatus',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'mintStatus', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"name"`.
 */
export function useTalentLayerIdName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'name', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"owner"`.
 */
export function useTalentLayerIdOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'owner', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useTalentLayerIdOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'ownerOf', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"ownersOf"`.
 */
export function useTalentLayerIdOwnersOf<
  TFunctionName extends 'ownersOf',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'ownersOf', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"profiles"`.
 */
export function useTalentLayerIdProfiles<
  TFunctionName extends 'profiles',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'profiles', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"proxiableUUID"`.
 */
export function useTalentLayerIdProxiableUuid<
  TFunctionName extends 'proxiableUUID',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'proxiableUUID', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useTalentLayerIdSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: talentLayerIdABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"symbol"`.
 */
export function useTalentLayerIdSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'symbol', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"takenHandles"`.
 */
export function useTalentLayerIdTakenHandles<
  TFunctionName extends 'takenHandles',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'takenHandles', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"talentLayerPlatformIdContract"`.
 */
export function useTalentLayerIdTalentLayerPlatformIdContract<
  TFunctionName extends 'talentLayerPlatformIdContract',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: talentLayerIdABI,
    functionName: 'talentLayerPlatformIdContract',
    ...config,
  } as UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useTalentLayerIdTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'tokenURI', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useTalentLayerIdTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof talentLayerIdABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof talentLayerIdABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({ abi: talentLayerIdABI, functionName: 'totalSupply', ...config } as UseContractReadConfig<
    typeof talentLayerIdABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__.
 */
export function useTalentLayerIdWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof talentLayerIdABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, TFunctionName, TMode>({ abi: talentLayerIdABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"addDelegate"`.
 */
export function useTalentLayerIdAddDelegate<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'addDelegate'>['request']['abi'],
        'addDelegate',
        TMode
      > & { functionName?: 'addDelegate' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'addDelegate', TMode> & {
        abi?: never
        functionName?: 'addDelegate'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'addDelegate', TMode>({
    abi: talentLayerIdABI,
    functionName: 'addDelegate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"addTrustedForwarder"`.
 */
export function useTalentLayerIdAddTrustedForwarder<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'addTrustedForwarder'>['request']['abi'],
        'addTrustedForwarder',
        TMode
      > & { functionName?: 'addTrustedForwarder' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'addTrustedForwarder', TMode> & {
        abi?: never
        functionName?: 'addTrustedForwarder'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'addTrustedForwarder', TMode>({
    abi: talentLayerIdABI,
    functionName: 'addTrustedForwarder',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"approve"`.
 */
export function useTalentLayerIdApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'approve', TMode>({
    abi: talentLayerIdABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"freeMint"`.
 */
export function useTalentLayerIdFreeMint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'freeMint'>['request']['abi'],
        'freeMint',
        TMode
      > & { functionName?: 'freeMint' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'freeMint', TMode> & {
        abi?: never
        functionName?: 'freeMint'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'freeMint', TMode>({
    abi: talentLayerIdABI,
    functionName: 'freeMint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"initialize"`.
 */
export function useTalentLayerIdInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'initialize'>['request']['abi'],
        'initialize',
        TMode
      > & { functionName?: 'initialize' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'initialize', TMode> & {
        abi?: never
        functionName?: 'initialize'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'initialize', TMode>({
    abi: talentLayerIdABI,
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"mint"`.
 */
export function useTalentLayerIdMint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'mint', TMode>({
    abi: talentLayerIdABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"mintForAddress"`.
 */
export function useTalentLayerIdMintForAddress<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'mintForAddress'>['request']['abi'],
        'mintForAddress',
        TMode
      > & { functionName?: 'mintForAddress' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'mintForAddress', TMode> & {
        abi?: never
        functionName?: 'mintForAddress'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'mintForAddress', TMode>({
    abi: talentLayerIdABI,
    functionName: 'mintForAddress',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"removeDelegate"`.
 */
export function useTalentLayerIdRemoveDelegate<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'removeDelegate'>['request']['abi'],
        'removeDelegate',
        TMode
      > & { functionName?: 'removeDelegate' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'removeDelegate', TMode> & {
        abi?: never
        functionName?: 'removeDelegate'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'removeDelegate', TMode>({
    abi: talentLayerIdABI,
    functionName: 'removeDelegate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"removeTrustedForwarder"`.
 */
export function useTalentLayerIdRemoveTrustedForwarder<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'removeTrustedForwarder'>['request']['abi'],
        'removeTrustedForwarder',
        TMode
      > & { functionName?: 'removeTrustedForwarder' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'removeTrustedForwarder', TMode> & {
        abi?: never
        functionName?: 'removeTrustedForwarder'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'removeTrustedForwarder', TMode>({
    abi: talentLayerIdABI,
    functionName: 'removeTrustedForwarder',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useTalentLayerIdRenounceOwnership<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'renounceOwnership'>['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'renounceOwnership', TMode> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'renounceOwnership', TMode>({
    abi: talentLayerIdABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useTalentLayerIdSafeTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'safeTransferFrom'>['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'safeTransferFrom', TMode>({
    abi: talentLayerIdABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useTalentLayerIdSetApprovalForAll<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'setApprovalForAll'>['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'setApprovalForAll', TMode>({
    abi: talentLayerIdABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"setHasActivity"`.
 */
export function useTalentLayerIdSetHasActivity<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'setHasActivity'>['request']['abi'],
        'setHasActivity',
        TMode
      > & { functionName?: 'setHasActivity' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'setHasActivity', TMode> & {
        abi?: never
        functionName?: 'setHasActivity'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'setHasActivity', TMode>({
    abi: talentLayerIdABI,
    functionName: 'setHasActivity',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"setIsServiceContract"`.
 */
export function useTalentLayerIdSetIsServiceContract<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'setIsServiceContract'>['request']['abi'],
        'setIsServiceContract',
        TMode
      > & { functionName?: 'setIsServiceContract' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'setIsServiceContract', TMode> & {
        abi?: never
        functionName?: 'setIsServiceContract'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'setIsServiceContract', TMode>({
    abi: talentLayerIdABI,
    functionName: 'setIsServiceContract',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"setWhitelistMerkleRoot"`.
 */
export function useTalentLayerIdSetWhitelistMerkleRoot<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'setWhitelistMerkleRoot'>['request']['abi'],
        'setWhitelistMerkleRoot',
        TMode
      > & { functionName?: 'setWhitelistMerkleRoot' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'setWhitelistMerkleRoot', TMode> & {
        abi?: never
        functionName?: 'setWhitelistMerkleRoot'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'setWhitelistMerkleRoot', TMode>({
    abi: talentLayerIdABI,
    functionName: 'setWhitelistMerkleRoot',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useTalentLayerIdTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'transferFrom', TMode>({
    abi: talentLayerIdABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useTalentLayerIdTransferOwnership<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'transferOwnership'>['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'transferOwnership', TMode> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'transferOwnership', TMode>({
    abi: talentLayerIdABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"updateMintFee"`.
 */
export function useTalentLayerIdUpdateMintFee<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'updateMintFee'>['request']['abi'],
        'updateMintFee',
        TMode
      > & { functionName?: 'updateMintFee' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'updateMintFee', TMode> & {
        abi?: never
        functionName?: 'updateMintFee'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'updateMintFee', TMode>({
    abi: talentLayerIdABI,
    functionName: 'updateMintFee',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"updateMintStatus"`.
 */
export function useTalentLayerIdUpdateMintStatus<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'updateMintStatus'>['request']['abi'],
        'updateMintStatus',
        TMode
      > & { functionName?: 'updateMintStatus' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'updateMintStatus', TMode> & {
        abi?: never
        functionName?: 'updateMintStatus'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'updateMintStatus', TMode>({
    abi: talentLayerIdABI,
    functionName: 'updateMintStatus',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"updateProfileData"`.
 */
export function useTalentLayerIdUpdateProfileData<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'updateProfileData'>['request']['abi'],
        'updateProfileData',
        TMode
      > & { functionName?: 'updateProfileData' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'updateProfileData', TMode> & {
        abi?: never
        functionName?: 'updateProfileData'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'updateProfileData', TMode>({
    abi: talentLayerIdABI,
    functionName: 'updateProfileData',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"updateShortHandlesMaxPrice"`.
 */
export function useTalentLayerIdUpdateShortHandlesMaxPrice<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'updateShortHandlesMaxPrice'>['request']['abi'],
        'updateShortHandlesMaxPrice',
        TMode
      > & { functionName?: 'updateShortHandlesMaxPrice' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'updateShortHandlesMaxPrice', TMode> & {
        abi?: never
        functionName?: 'updateShortHandlesMaxPrice'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'updateShortHandlesMaxPrice', TMode>({
    abi: talentLayerIdABI,
    functionName: 'updateShortHandlesMaxPrice',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"upgradeTo"`.
 */
export function useTalentLayerIdUpgradeTo<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'upgradeTo'>['request']['abi'],
        'upgradeTo',
        TMode
      > & { functionName?: 'upgradeTo' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'upgradeTo', TMode> & {
        abi?: never
        functionName?: 'upgradeTo'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'upgradeTo', TMode>({
    abi: talentLayerIdABI,
    functionName: 'upgradeTo',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function useTalentLayerIdUpgradeToAndCall<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'upgradeToAndCall'>['request']['abi'],
        'upgradeToAndCall',
        TMode
      > & { functionName?: 'upgradeToAndCall' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'upgradeToAndCall', TMode> & {
        abi?: never
        functionName?: 'upgradeToAndCall'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'upgradeToAndCall', TMode>({
    abi: talentLayerIdABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"whitelistMint"`.
 */
export function useTalentLayerIdWhitelistMint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'whitelistMint'>['request']['abi'],
        'whitelistMint',
        TMode
      > & { functionName?: 'whitelistMint' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'whitelistMint', TMode> & {
        abi?: never
        functionName?: 'whitelistMint'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'whitelistMint', TMode>({
    abi: talentLayerIdABI,
    functionName: 'whitelistMint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"withdraw"`.
 */
export function useTalentLayerIdWithdraw<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof talentLayerIdABI, 'withdraw'>['request']['abi'],
        'withdraw',
        TMode
      > & { functionName?: 'withdraw' }
    : UseContractWriteConfig<typeof talentLayerIdABI, 'withdraw', TMode> & {
        abi?: never
        functionName?: 'withdraw'
      } = {} as any,
) {
  return useContractWrite<typeof talentLayerIdABI, 'withdraw', TMode>({
    abi: talentLayerIdABI,
    functionName: 'withdraw',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__.
 */
export function usePrepareTalentLayerIdWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof talentLayerIdABI, TFunctionName>, 'abi'> = {} as any,
) {
  return usePrepareContractWrite({ abi: talentLayerIdABI, ...config } as UsePrepareContractWriteConfig<
    typeof talentLayerIdABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"addDelegate"`.
 */
export function usePrepareTalentLayerIdAddDelegate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'addDelegate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'addDelegate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'addDelegate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"addTrustedForwarder"`.
 */
export function usePrepareTalentLayerIdAddTrustedForwarder(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'addTrustedForwarder'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'addTrustedForwarder',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'addTrustedForwarder'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareTalentLayerIdApprove(
  config: Omit<UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'approve'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"freeMint"`.
 */
export function usePrepareTalentLayerIdFreeMint(
  config: Omit<UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'freeMint'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'freeMint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'freeMint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareTalentLayerIdInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'initialize'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'initialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareTalentLayerIdMint(
  config: Omit<UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'mint'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"mintForAddress"`.
 */
export function usePrepareTalentLayerIdMintForAddress(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'mintForAddress'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'mintForAddress',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'mintForAddress'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"removeDelegate"`.
 */
export function usePrepareTalentLayerIdRemoveDelegate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'removeDelegate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'removeDelegate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'removeDelegate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"removeTrustedForwarder"`.
 */
export function usePrepareTalentLayerIdRemoveTrustedForwarder(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'removeTrustedForwarder'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'removeTrustedForwarder',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'removeTrustedForwarder'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareTalentLayerIdRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareTalentLayerIdSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareTalentLayerIdSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"setHasActivity"`.
 */
export function usePrepareTalentLayerIdSetHasActivity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'setHasActivity'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'setHasActivity',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'setHasActivity'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"setIsServiceContract"`.
 */
export function usePrepareTalentLayerIdSetIsServiceContract(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'setIsServiceContract'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'setIsServiceContract',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'setIsServiceContract'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"setWhitelistMerkleRoot"`.
 */
export function usePrepareTalentLayerIdSetWhitelistMerkleRoot(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'setWhitelistMerkleRoot'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'setWhitelistMerkleRoot',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'setWhitelistMerkleRoot'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareTalentLayerIdTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareTalentLayerIdTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"updateMintFee"`.
 */
export function usePrepareTalentLayerIdUpdateMintFee(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'updateMintFee'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'updateMintFee',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'updateMintFee'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"updateMintStatus"`.
 */
export function usePrepareTalentLayerIdUpdateMintStatus(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'updateMintStatus'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'updateMintStatus',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'updateMintStatus'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"updateProfileData"`.
 */
export function usePrepareTalentLayerIdUpdateProfileData(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'updateProfileData'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'updateProfileData',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'updateProfileData'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"updateShortHandlesMaxPrice"`.
 */
export function usePrepareTalentLayerIdUpdateShortHandlesMaxPrice(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'updateShortHandlesMaxPrice'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'updateShortHandlesMaxPrice',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'updateShortHandlesMaxPrice'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"upgradeTo"`.
 */
export function usePrepareTalentLayerIdUpgradeTo(
  config: Omit<UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'upgradeTo'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'upgradeTo',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'upgradeTo'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"upgradeToAndCall"`.
 */
export function usePrepareTalentLayerIdUpgradeToAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'upgradeToAndCall'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'upgradeToAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'upgradeToAndCall'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"whitelistMint"`.
 */
export function usePrepareTalentLayerIdWhitelistMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'whitelistMint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'whitelistMint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'whitelistMint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link talentLayerIdABI}__ and `functionName` set to `"withdraw"`.
 */
export function usePrepareTalentLayerIdWithdraw(
  config: Omit<UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'withdraw'>, 'abi' | 'functionName'> = {} as any,
) {
  return usePrepareContractWrite({
    abi: talentLayerIdABI,
    functionName: 'withdraw',
    ...config,
  } as UsePrepareContractWriteConfig<typeof talentLayerIdABI, 'withdraw'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__.
 */
export function useTalentLayerIdEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, TEventName>, 'abi'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    TEventName
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"AdminChanged"`.
 */
export function useTalentLayerIdAdminChangedEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'AdminChanged'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'AdminChanged', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'AdminChanged'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"Approval"`.
 */
export function useTalentLayerIdApprovalEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'Approval'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'Approval', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'Approval'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useTalentLayerIdApprovalForAllEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'ApprovalForAll'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'ApprovalForAll', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'ApprovalForAll'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"BeaconUpgraded"`.
 */
export function useTalentLayerIdBeaconUpgradedEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'BeaconUpgraded'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'BeaconUpgraded', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'BeaconUpgraded'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"CidUpdated"`.
 */
export function useTalentLayerIdCidUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'CidUpdated'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'CidUpdated', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'CidUpdated'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"DelegateAdded"`.
 */
export function useTalentLayerIdDelegateAddedEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'DelegateAdded'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'DelegateAdded', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'DelegateAdded'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"DelegateRemoved"`.
 */
export function useTalentLayerIdDelegateRemovedEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'DelegateRemoved'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'DelegateRemoved', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'DelegateRemoved'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"Initialized"`.
 */
export function useTalentLayerIdInitializedEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'Initialized'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'Initialized', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'Initialized'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"Mint"`.
 */
export function useTalentLayerIdMintEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'Mint'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'Mint', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'Mint'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"MintFeeUpdated"`.
 */
export function useTalentLayerIdMintFeeUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'MintFeeUpdated'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'MintFeeUpdated', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'MintFeeUpdated'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"MintStatusUpdated"`.
 */
export function useTalentLayerIdMintStatusUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'MintStatusUpdated'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({
    abi: talentLayerIdABI,
    eventName: 'MintStatusUpdated',
    ...config,
  } as UseContractEventConfig<typeof talentLayerIdABI, 'MintStatusUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useTalentLayerIdOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof talentLayerIdABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: talentLayerIdABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof talentLayerIdABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"ShortHandlesMaxPriceUpdated"`.
 */
export function useTalentLayerIdShortHandlesMaxPriceUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof talentLayerIdABI, 'ShortHandlesMaxPriceUpdated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: talentLayerIdABI,
    eventName: 'ShortHandlesMaxPriceUpdated',
    ...config,
  } as UseContractEventConfig<typeof talentLayerIdABI, 'ShortHandlesMaxPriceUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"Transfer"`.
 */
export function useTalentLayerIdTransferEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'Transfer'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'Transfer', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'Transfer'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"TrustedForwarderAdded"`.
 */
export function useTalentLayerIdTrustedForwarderAddedEvent(
  config: Omit<
    UseContractEventConfig<typeof talentLayerIdABI, 'TrustedForwarderAdded'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: talentLayerIdABI,
    eventName: 'TrustedForwarderAdded',
    ...config,
  } as UseContractEventConfig<typeof talentLayerIdABI, 'TrustedForwarderAdded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"TrustedForwarderRemoved"`.
 */
export function useTalentLayerIdTrustedForwarderRemovedEvent(
  config: Omit<
    UseContractEventConfig<typeof talentLayerIdABI, 'TrustedForwarderRemoved'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: talentLayerIdABI,
    eventName: 'TrustedForwarderRemoved',
    ...config,
  } as UseContractEventConfig<typeof talentLayerIdABI, 'TrustedForwarderRemoved'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link talentLayerIdABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useTalentLayerIdUpgradedEvent(
  config: Omit<UseContractEventConfig<typeof talentLayerIdABI, 'Upgraded'>, 'abi' | 'eventName'> = {} as any,
) {
  return useContractEvent({ abi: talentLayerIdABI, eventName: 'Upgraded', ...config } as UseContractEventConfig<
    typeof talentLayerIdABI,
    'Upgraded'
  >)
}
