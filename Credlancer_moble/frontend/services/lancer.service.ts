import { BASE_URL } from "../utils/constants";

interface LancerSignatureResponse {
  isRegistered: false;
  message: any;
}

interface LancerProfileResponse {
  isRegistered: true;
  lancer: any;
}

type LancerSignatureProfile = LancerProfileResponse | LancerSignatureResponse;

export class LancerService {
  static async fetchLancerSignatureOrProfile(
    address: string
  ): Promise<LancerSignatureProfile> {
    return fetch(`${BASE_URL}/lancer/${address}`).then((res) => res.json());
  }

  static async fecthLancer(address: string) {
    return fetch(`${BASE_URL}/lancer/${address}`, {
      method: "GET",
    }).then((res) => res.json());
  }

  static async createLancerProfile(data: any) {
    console.log({ BASE_URL });
    return fetch(`${BASE_URL}/lancer/register`, {
      method: "POST",
      body: data,
    }).then((res) => res.json());
  }
}
