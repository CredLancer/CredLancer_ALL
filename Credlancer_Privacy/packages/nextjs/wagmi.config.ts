import TalentLayerID from "./abi/TalentLayerID.json";
import { defineConfig } from "@wagmi/cli";
import { Abi } from "viem";

export default defineConfig({
  out: "utils/generated.ts",
  contracts: [
    {
      name: "TalentLayerID",
      abi: TalentLayerID.abi as Abi,
    },
  ],
  plugins: [],
});
