import { Dispatch, SetStateAction } from "react";
import { EncryptionHandler } from "./encryption-handler";
import MessageHandler, { Message } from "./message-handler";
import { PrivateMessage } from "./proto/compiled";
import { DecodedMessage, Protocols, RelayNode, createEncoder, createRelayNode, waitForRemotePeer } from "@waku/sdk";
import { Logger } from "~~/utils/logger";

class ChatService {
  private messages: Message[] = [];
  public waku: RelayNode | null;
  private encryptionHandler: EncryptionHandler;
  private contentTopic: string;

  // constructor(encryptionKey: string, waku: RelayNode) {
  constructor(encryptionKey: string, contentTopic: string) {
    this.encryptionHandler = new EncryptionHandler(encryptionKey);
    this.contentTopic = contentTopic;
    this.waku = null;
    this.messages = [];
    this.onMessage = this.onMessage.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  public async initWaku() {
    this.waku = await this.initWakuNode();
    return this.waku;
  }

  private async initWakuNode(): Promise<RelayNode> {
    const waku = await createRelayNode({ defaultBootstrap: true });
    Logger.debug("created waku node");
    await waku.start();

    Logger.debug("started waku node");

    await waitForRemotePeer(waku, [Protocols.Relay]);

    Logger.debug("found remote peer", waku);
    return waku;
  }

  public sendMessage(text: string, sender: string): void {
    if (!this.waku) {
      text = text + " no waku";
      return;
    }
    const formattedMessage = MessageHandler.createMessage(text, sender);
    const encryptedMessage = this.encryptionHandler.encryptMessage(formattedMessage.text);
    const message: Message = {
      text: encryptedMessage,
      senderId: formattedMessage.senderId,
      timestamp: formattedMessage.timestamp,
    };
    // this.sendMessage;
    this.messages.push(message);
    if (!this.waku) return;
    this.sendWakuMessage(this.waku, message, res => {
      if (res) {
        Logger.debug("callback called with", res);
      }
    });
  }

  async sendWakuMessage(waku: RelayNode, message: Message, callback: (res: boolean) => void) {
    const payload = PrivateMessage.create(message);
    const buffer = PrivateMessage.encode(payload).finish();
    const encoder = createEncoder({
      contentTopic: this.contentTopic,
      ephemeral: true,
    });

    const res = await waku.relay.send(encoder, { payload: buffer });
    Logger.debug("Message sent", res);
    callback(Boolean(res.recipients.length));
  }

  public onMessage(setter: Dispatch<SetStateAction<Message[]>>, address: string, wakuMsg: DecodedMessage) {
    try {
      const payload = PrivateMessage.decode(wakuMsg.payload);
      Logger.debug("got stuff", payload.text);
      this.messages.push(payload);
      setter(this.getMessages());
    } catch (e) {
      Logger.error("catch onMessage", e);
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
        senderId: message.senderId,
        text: this.encryptionHandler.decryptMessage(message.text),
      });
    }
    return descryptedMessages;
  }
}

export default ChatService;
