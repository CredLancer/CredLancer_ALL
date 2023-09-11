import { AccountData, ConnectData, DecryptRecordData, Execute, QueryRecords, RecordData, Sign, Transfer } from "../model";

/**
 * 连接钱包 返回 账户
 * @constructor
 */
export async function connectWalletPlugin(): Promise<ConnectData> {
  console.log('准备链接钱包授权');
  // @ts-ignore
  let account = await window.wallet.features['standard:connect'].connect()
  return account
}

/**
 * 钱包是否连接
 */
export function walletConnected() {
  // @ts-ignore
  let connected = window.wallet.connected
  return connected
}

export function walletAccount(): Promise<AccountData> {
  // @ts-ignore
  let accounts = window.wallet.accounts
  return accounts
}

/**
 * 解密record 返回 解密后的数据
 * @param record
 */
export async function decryptRecord(record: string): Promise<DecryptRecordData[]> {
  try {
    let records = [] as string[]
    records.unshift(record)
    // @ts-ignore
    let recordData = await window.wallet.features['standard:decrypt'].decrypt(records);
    console.log(recordData);
    return recordData.result
  } catch (e) {
    return [] as DecryptRecordData[]
  }
}
export async function transfer(params: Transfer): Promise<any> {
  try {
    // @ts-ignore
    let transferRes = await window.wallet.features['standard:transfer'].transfer(params);
    return transferRes;
  } catch (e) {
    return "";
  }
};
export async function sign(params: Sign): Promise<any> {
  try {
    // @ts-ignore
    let signResult = await window.wallet.features['standard:sign'].sign(params);
    console.log(signResult);
    return JSON.parse(signResult);
  } catch (e) {
    return "";
  }
}

export async function queryRecords(params: QueryRecords): Promise<any> {
  try {
    // @ts-ignore
    let signResult = await window.wallet.features['standard:records'].records(params);
    console.log(signResult)
    return signResult;
  } catch (e) {
    return "";
  }
}
export async function execute(params: Execute): Promise<any> {
  try {
    // @ts-ignore
    let executeRes = await window.wallet.features['standard:execute'].execute(params);
    console.log(executeRes);
    return JSON.parse(executeRes);
  } catch (e) { }
}
// 取消授权
export async function cancelPre(): Promise<any> {
  try {
    // @ts-ignore
    let result = await window.wallet.features['standard:cancelPre'].cancelPre();
    console.log(result);
    return result;
  } catch (e) { }
}
// 断开连接
export async function walletDisConnect(){
  console.log('准备取消链接');
  // @ts-ignore
  window.wallet.features['standard:disConnect'].disConnect();
}