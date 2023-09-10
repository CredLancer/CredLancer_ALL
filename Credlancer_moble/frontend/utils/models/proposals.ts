export interface QuestProposalType {
  id: string;
  proposer: QuestProposer;
  blockNumber: number;
  file: {
    approxCompletionTime: string;
    cid: string;
    description: string;
  };
  status: ProposalStatus;
  questId: string;
  fileCID: string;
  workCID?: string;
}

export interface OrganizationModel {
  id: number;
  admin: string;
  name: string;
  imageCID: string;
  imageURL: string;
  description: string;
  video: string;
  blockNumber: number;
  email: string;
}
export interface QuestModel {
  id: string;
  value: string;
  status: ProposalStatus;
  questCID: string;
  orgId: number;
  deadline: string;
  blockNumber: number;
  org: OrganizationModel;
}

export type LancerProposal = Omit<QuestProposalType, "proposer"> & {
  quest: QuestModel;
  proposer: string;
};

export enum ProposalStatus {
  Proposed = "Proposed",
  Accepted = "Accepted",
  Rejected = "Rejected",
  Awarded = "Awarded",
}

export interface QuestProposer {
  address: string;
  description: string;
  email: string;
  imageCID: string;
  name: string;
  nonce: string;
  registered: boolean;
}
