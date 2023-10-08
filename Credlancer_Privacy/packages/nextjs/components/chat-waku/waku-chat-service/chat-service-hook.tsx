import { useEffect, useState } from "react";
import ChatService from "./chat-service";
import { Message } from "./message-handler";
import { RelayNode, createDecoder } from "@waku/sdk";
import { Logger } from "~~/utils/logger";

const encryptionKey = "supersecretkey";

const useChat = (contentTopic: string) => {
    const [chatService, setChatService] = useState<ChatService | null>();
    const [messages, setMessages] = useState<Message[]>([]);
    const [sender, setSender] = useState<string | null>(null);
    const [waku, setWaku] = useState<RelayNode | null>(null);

    const handleSendMessage = (text: string) => {
        if (!chatService) return;
        if (!sender) return;
        Logger.debug("sender?", sender);
        chatService.sendMessage(text, sender);
        setMessages(chatService.getMessages());
    };

    useEffect(() => {
        (async () => {
            if (chatService) return;
            if (waku) return;

            Logger.debug("starting service");
            const _chatService = new ChatService(encryptionKey, contentTopic);
            Logger.debug("starting waku");
            const _waku = await _chatService.initWaku();
            Logger.debug("waku: ready");
            setChatService(_chatService);
            setWaku(_waku);
        })().catch((e) => {
            Logger.error("Failed to initiate Waku", e);
        });

        let unsubscribe: undefined | (() => Promise<void>);
        return function cleanUp() {
            if (typeof unsubscribe === "undefined") return;

            unsubscribe().then(
                () => {
                    Logger.debug("unsubscribed to ", contentTopic);
                },
                (e) => Logger.error("Failed to unsubscribe", e)
            );
        };
    }, [waku]);

    useEffect(() => {
        if (!waku) return;
        if (!sender) return;
        if (!chatService) return;

        const decoder = createDecoder(contentTopic);

        let unsubscribe: undefined | (() => Promise<void>);

        const handleOnMessages = chatService.onMessage.bind(
            {},
            setMessages,
            sender
        );

        Logger.debug("subscribing");
        waku.relay.subscribe(decoder, handleOnMessages);
        Logger.debug("subscribed");

        return function cleanUp() {
            if (typeof unsubscribe === "undefined") return;

            unsubscribe().then(
                () => {
                    Logger.debug("unsubscribed to ", contentTopic);
                },
                (e) => Logger.error("Failed to unsubscribe", e)
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
