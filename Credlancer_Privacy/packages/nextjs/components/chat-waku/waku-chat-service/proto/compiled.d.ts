import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a PrivateMessage. */
export interface IPrivateMessage {

    /** PrivateMessage text */
    text?: (string|null);

    /** PrivateMessage senderId */
    senderId?: (string|null);

    /** PrivateMessage timestamp */
    timestamp?: (string|null);
}

/** Represents a PrivateMessage. */
export class PrivateMessage implements IPrivateMessage {

    /**
     * Constructs a new PrivateMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPrivateMessage);

    /** PrivateMessage text. */
    public text: string;

    /** PrivateMessage senderId. */
    public senderId: string;

    /** PrivateMessage timestamp. */
    public timestamp: string;

    /**
     * Creates a new PrivateMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PrivateMessage instance
     */
    public static create(properties?: IPrivateMessage): PrivateMessage;

    /**
     * Encodes the specified PrivateMessage message. Does not implicitly {@link PrivateMessage.verify|verify} messages.
     * @param message PrivateMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPrivateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PrivateMessage message, length delimited. Does not implicitly {@link PrivateMessage.verify|verify} messages.
     * @param message PrivateMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPrivateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PrivateMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PrivateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PrivateMessage;

    /**
     * Decodes a PrivateMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PrivateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PrivateMessage;

    /**
     * Verifies a PrivateMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PrivateMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PrivateMessage
     */
    public static fromObject(object: { [k: string]: any }): PrivateMessage;

    /**
     * Creates a plain object from a PrivateMessage message. Also converts values to other types if specified.
     * @param message PrivateMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PrivateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PrivateMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PrivateMessage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
