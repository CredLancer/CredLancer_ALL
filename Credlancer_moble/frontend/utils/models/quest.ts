export interface QuestResponse {
    title: string;
    description: string;
    id: number;
    questCID: string;
    status: string;
    orgId: number;
    value: number;
    blockNumber?: number;
    deadline?: number;
  }
  