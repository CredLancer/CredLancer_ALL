import { CreateProposalStep } from "./step";
import { Recipe, Step } from "@railgun-community/cookbook";
import { NetworkName } from "@railgun-community/shared-models";

export class CreateProposalRecipe extends Recipe {
  readonly config = {
    name: "Create Proposal recipe",
    description: "Creates a proposal with Talent Layer",
    minGasLimit: 10000n,
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

  protected supportsNetwork(networkName: NetworkName): boolean {
    return NetworkName.EthereumGoerli === networkName;
  }
  protected async getInternalSteps(): Promise<Step[]> {
    return [new CreateProposalStep(this.receipient, this.amount, this.erc20FeeProxy, this.serviceId)];
  }
}
