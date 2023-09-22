// import { goerli } from "wagmi/dist/chains";

import { parseEther } from "viem";

export const CONTRACT_ADDRESS = "0xe55865e5d12277070b0072545d5436f882aa9001"; //"0xab4B0AC5658a2dE35030a2c6E34Db803a5bEEab7";
export const NETID = 5;
export const REG_FEE = parseEther("0.00000001");
export const CONTRACT_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [
      { internalType: "uint256", name: "jobId", type: "uint256" },
      { internalType: "uint256", name: "proposalIndex", type: "uint256" },
    ],
    name: "acceptProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "jobIdCounter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "jobProposals",
    outputs: [
      { internalType: "address payable", name: "employee", type: "address" },
      { internalType: "string", name: "proposalText", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "jobs",
    outputs: [
      { internalType: "address payable", name: "employer", type: "address" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "uint256", name: "budget", type: "uint256" },
      { internalType: "bool", name: "isActive", type: "bool" },
      {
        internalType: "address payable",
        name: "acceptedFreelancer",
        type: "address",
      },
      { internalType: "string", name: "title", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "leavePlatformAndClaimStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "uint256", name: "budget", type: "uint256" },
    ],
    name: "postJob",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "profileData", type: "string" },
      { internalType: "bool", name: "isClient", type: "bool" },
    ],
    name: "register",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "registrationStake",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "jobId", type: "uint256" }],
    name: "releasePayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address payable", name: "recipient", type: "address" },
    ],
    name: "slashStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "jobId", type: "uint256" },
      { internalType: "string", name: "proposalText", type: "string" },
    ],
    name: "submitProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "users",
    outputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "bool", name: "isClient", type: "bool" },
      { internalType: "string", name: "profileData", type: "string" },
      { internalType: "uint256", name: "stakedAmount", type: "uint256" },
      { internalType: "bool", name: "isRegistered", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
