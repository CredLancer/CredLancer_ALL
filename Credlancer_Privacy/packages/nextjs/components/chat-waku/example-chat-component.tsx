import { useEffect, useState } from "react";
import useChat from "./waku-chat-service/chat-service-hook";

/*
 * id of the user connected, can be anything, as long as it is unique
 */
const senderId = Math.floor(Math.random() * 1000).toString();
/* the name of the "room" */
const contentTopic = "content-topic/string/credlancer";

/* the use of the hook should stay the same in the next version, maybe only minor changes */
export function WakuChat() {
    /* calling the hook */
    const { messages, handleSendMessage, setSender } = useChat(contentTopic);
    const [newMessage, setNewMessage] = useState<string>("");

    /* on submit, click button whatever, call the handleSendMessage function from the hook */
    const handleSend = () => {
        if (newMessage.trim() === "") return;
        handleSendMessage(newMessage);
        setNewMessage("");
    };

    useEffect(() => {
        /* when you get the id of the user, setSender with the id */
        setSender(senderId);
    }, []);

    return (
        <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
            <div className="h-64 border rounded-lg overflow-y-scroll">
                {/* messages array from the hook to get all the messages of the conversation */}
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`p-2 mb-2 ${
                            message.senderId === senderId
                                ? "bg-blue-200"
                                : "bg-gray-200"
                        } rounded-lg`}
                    >
                        <p className="text-sm">{message.senderId}</p>
                        <p className="text-lg">{message.text}</p>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="text-black flex-grow px-2 py-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                    onClick={handleSend}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
