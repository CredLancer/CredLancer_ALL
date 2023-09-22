import { useContractRead } from "wagmi";
import { CONTRACT_ABI, CONTRACT_ADDRESS, NETID } from "../STATIC";
import abi from "../../contracts/abi.json";
import { goerli } from "wagmi/dist/chains";

// function App() {
//   const { data, isError, isLoading } = useContractRead({
//     address: CONTRACT_ADDRESS,
//     abi: wagmigotchiABI,
//     chainId: goerli.id,
//     functionName: "getHunger",
//   });
// }
const wagmigotchiABI = CONTRACT_ABI;

export const getUserAccountData = {
  address: CONTRACT_ADDRESS,
  abi: wagmigotchiABI,
  chainId: NETID,
  functionName: "users",
};
