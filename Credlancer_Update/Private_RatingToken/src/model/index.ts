export interface ConnectData {
    address: string;
}

export interface AccountData {
    address: string;
    balance:number;
}

export interface DecryptRecordData {
    address: string,
    dyRecord: string
    record: string
}

export interface RecordData {
    owner: string;
    microcredits: string;
    _nonce: string;
}

export interface Transfer {
    to: string;
    amount: string;
}

export interface Sign {
    message: string;
}
export interface QueryRecords {
    program: string;
}

export interface Execute {
    programID: string;
    functionName: string;
    inputs: string;
}