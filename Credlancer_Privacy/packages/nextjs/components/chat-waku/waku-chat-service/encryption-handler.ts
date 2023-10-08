import { AES, enc } from "crypto-js";

export class EncryptionHandler {
    private encryptionKey: string;

    constructor(encryptionKey: string) {
        this.encryptionKey = encryptionKey;
    }

    public encryptMessage(message: string): string {
        return AES.encrypt(message, this.encryptionKey).toString();
    }

    public decryptMessage(encryptedMessage: string): string {
        const bytes = AES.decrypt(encryptedMessage, this.encryptionKey);
        return bytes.toString(enc.Utf8);
    }
}
