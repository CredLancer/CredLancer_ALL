import { Dispatch, SetStateAction } from "react";
import { EncryptionHandler } from "./encryption-handler";
import MessageHandler, { Message } from "./message-handler";
import { initWaku, sendWakuMessage } from "./waku";
import { DecodedMessage, RelayNode } from "@waku/sdk";

class ChatService {
  private messages: Message[] = [];
  public waku: RelayNode | null;
  private encryptionHandler: EncryptionHandler;

  // constructor(encryptionKey: string, waku: RelayNode) {
  constructor(encryptionKey: string) {
    this.encryptionHandler = new EncryptionHandler(encryptionKey);
    this.waku = null;
    this.messages = [];
    this.onMessage = this.onMessage.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  public async initWaku() {
    this.waku = await initWaku();
    return this.waku;
  }

  public sendMessage(text: string, sender: string): void {
    if (!this.waku) text = text + " no waku";
    const formattedMessage = MessageHandler.createMessage(text, sender);
    const encryptedMessage = this.encryptionHandler.encryptMessage(formattedMessage.text);
    const message: Message = {
      text: encryptedMessage,
      sender: formattedMessage.sender,
      timestamp: formattedMessage.timestamp,
    };
    // this.sendMessage;
    this.messages.push(message);
    if (!this.waku) return;
    sendWakuMessage(this.waku, message, res => {
      if (res) {
        console.log("callback called with", res);
      }
    });
  }

  public onMessage(setter: Dispatch<SetStateAction<Message[]>>, address: string, wakuMsg: DecodedMessage) {
    try {
      const payload = new TextDecoder().decode(wakuMsg.payload);
      const obj = JSON.parse(payload) as Message;
      console.log("got stuff", obj.text);
      this.messages.push(obj);
      console.log(this.getMessages());
      setter(this.getMessages());
    } catch (e) {
      console.log(e);
    }
  }

  public getMessages(): Message[] {
    const decryptedMessages = this.decryptMessages();
    return decryptedMessages;
  }

  public decryptMessages(): Message[] {
    const descryptedMessages: Message[] = [];
    for (const message of this.messages) {
      descryptedMessages.push({
        timestamp: message.timestamp,
        sender: message.sender,
        text: this.encryptionHandler.decryptMessage(message.text),
      });
    }
    return descryptedMessages;
  }
}

export default ChatService;
