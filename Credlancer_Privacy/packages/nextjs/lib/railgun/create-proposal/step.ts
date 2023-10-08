import { Step, StepInput, UnvalidatedStepOutput, createNoActionStepOutput } from "@railgun-community/cookbook";
import { Contract, ContractTransaction } from "ethers";
import { goerli } from "viem/chains";
import TalentLayerService from "~~/abi/TalentLayerService.json";
import { CONTRACT_ADDRESSES } from "~~/constants/address";

export class CreateProposalStep extends Step {
  readonly config = {
    name: "Create Proposal",
    description: "Creates a service in the Talent Layer protocol contract",
    hasNonDeterministicOutput: false,
  };

  private readonly receipient: string;
  private readonly amount: bigint;
  private readonly erc20FeeProxy: string;
  private readonly serviceId: bigint;

  constructor(receipient: string, amount: bigint, erc20FeeProxy: string, serviceId: bigint) {
    super();
    this.amount = amount;
    this.receipient = receipient;
    this.erc20FeeProxy = erc20FeeProxy;
    this.serviceId = serviceId;
  }

  protected async getStepOutput(input: StepInput): Promise<UnvalidatedStepOutput> {
    if (!this.amount || this.receipient) {
      return createNoActionStepOutput(input);
    }

    const contract = new Contract(CONTRACT_ADDRESSES[goerli.id].TALENT_LAYER_SERVICE, TalentLayerService.abi);

    const crossContractCalls: ContractTransaction[] = [];
    crossContractCalls.push(
      await contract.createProposal(this.serviceId, this.erc20FeeProxy, this.amount, BigInt(1), ""),
    );

    return {
      crossContractCalls,
      spentERC20Amounts: [],
      outputERC20Amounts: [],
      spentNFTs: [],
      outputNFTs: input.nfts,
      feeERC20AmountRecipients: [],
    };
  }
}
