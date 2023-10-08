import { CreateProposalRecipe } from "./recipe";
import { RecipeInput } from "@railgun-community/cookbook";
import { EVMGasType, NetworkName } from "@railgun-community/shared-models";
import {
  gasEstimateForUnprovenCrossContractCalls,
  generateCrossContractCallsProof,
  populateProvedCrossContractCalls,
} from "@railgun-community/wallet";

export async function createRecipeTransaction(
  receipient: string,
  amount: bigint,
  erc20FeeProxy: string,
  serviceId: bigint,
  walletId: string,
  encryptionKey: string,
) {
  const recipe = new CreateProposalRecipe(receipient, amount, erc20FeeProxy, serviceId);

  const recipeInput: RecipeInput = {
    networkName: NetworkName.EthereumGoerli,
    erc20Amounts: [],
    nfts: [],
    // TODO: figure out what this does
    railgunAddress: "",
  };
  const { crossContractCalls } = await recipe.getRecipeOutput(recipeInput);

  const { gasEstimate } = await gasEstimateForUnprovenCrossContractCalls(
    NetworkName.EthereumGoerli,
    walletId,
    encryptionKey,
    [],
    [],
    [],
    [],
    crossContractCalls,
    {
      evmGasType: EVMGasType.Type1,
      gasEstimate: 0n,
      gasPrice: 100000n,
    },
    [],
    false,
    undefined,
  );
  await generateCrossContractCallsProof(
    NetworkName.EthereumGoerli,
    walletId,
    encryptionKey,
    [],
    [],
    [],
    [],
    crossContractCalls,
    undefined,
    false,
    undefined,
    undefined,
    async () => {
      return;
    },
  );
  const { transaction } = await populateProvedCrossContractCalls(
    NetworkName.EthereumGoerli,
    walletId,
    [],
    [],
    [],
    [],
    [],
    crossContractCalls,
    false,
    false,
    {
      evmGasType: EVMGasType.Type1,
      gasEstimate: 0n,
      gasPrice: gasEstimate,
    },
  );

  return { gasEstimate, transaction };
}
