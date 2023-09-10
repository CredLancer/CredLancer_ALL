import { LIGHTHOUSE_URL } from "../utils/constants";
import lighthouse from "@lighthouse-web3/sdk";

export class UtilService {
  static async fetchLightHouseImage(cid: string) {
    return await lighthouse.getUploads(
      "0x487fc2fE07c593EAb555729c3DD6dF85020B5160"
    );
  }
}
