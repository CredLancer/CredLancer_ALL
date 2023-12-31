export interface Message {
    text: string;
    senderId: string;
    timestamp: string;
}

class MessageHandler {
    public static trimMessage(message: string): string {
        return message.trim();
    }

    public static formatTimestamp(): string {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const timestamp = `${hours}:${minutes}`;
        return timestamp;
    }

    public static createMessage(text: string, senderId: string): Message {
        const trimmedText = this.trimMessage(text);
        const timestamp = this.formatTimestamp();
        return {
            text: trimmedText,
            senderId,
            timestamp,
        };
    }
}

export default MessageHandler;
