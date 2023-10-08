import { useEffect, useState } from "react";
import ChatService from "./chat-service";
import { Message } from "./message-handler";
import { RelayNode, createDecoder, createEncoder } from "@waku/sdk";

const encryptionKey = "supersecretkey";
const contentTopic = "content-topic/string/credlancer";

const useChat = () => {
  const [chatService, setChatService] = useState<ChatService | null>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [sender, setSender] = useState<string | null>(null);
  const [waku, setWaku] = useState<RelayNode | null>(null);

  const handleSendMessage = (text: string) => {
    if (!chatService) return;
    if (!sender) return;
    console.log("sender?", sender);
    chatService.sendMessage(text, sender);
    setMessages(chatService.getMessages());
  };

  useEffect(() => {
    (async () => {
      if (chatService) return;
      if (waku) return;

      // setChatService(new ChatService(encryptionKey, _waku));
      console.log("starting service");
      const _chatService = new ChatService(encryptionKey);
      console.log("starting waku");
      const _waku = await _chatService.initWaku();
      console.log("waku: ready");
      setChatService(_chatService);
      setWaku(_waku);

      // const decoder = createDecoder(contentTopic);
      // const encoder = createEncoder({ contentTopic });

      // console.log("subscribing");
      // _waku.relay.subscribe(decoder, _chatService.onMessage);
      // console.log("subscribed");
    })().catch(e => {
      console.error("Failed to initiate Waku", e);
    });

    let unsubscribe: undefined | (() => Promise<void>);
    return function cleanUp() {
      if (typeof unsubscribe === "undefined") return;

      unsubscribe().then(
        () => {
          console.log("unsubscribed to ", contentTopic);
        },
        e => console.error("Failed to unsubscribe", e),
      );
    };
  }, [waku]);

  useEffect(() => {
    if (!waku) return;
    if (!sender) return;
    if (!chatService) return;

    const decoder = createDecoder(contentTopic);

    let unsubscribe: undefined | (() => Promise<void>);

    const handleOnMessages = chatService.onMessage.bind({}, setMessages, sender);

    // waku.relay.subscribe(publicKeyMessageDecoder, observerPublicKeyMessage);
    console.log("subscribing");
    waku.relay.subscribe(decoder, handleOnMessages);
    console.log("subscribed");

    return function cleanUp() {
      if (typeof unsubscribe === "undefined") return;

      unsubscribe().then(
        () => {
          console.log("unsubscribed to ", contentTopic);
        },
        e => console.error("Failed to unsubscribe", e),
      );
    };
  }, [waku, sender, chatService]);

  return {
    messages,
    handleSendMessage,
    setSender,
  };
};

export default useChat;
