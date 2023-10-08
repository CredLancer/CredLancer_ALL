/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PrivateMessage = (function() {

    /**
     * Properties of a PrivateMessage.
     * @exports IPrivateMessage
     * @interface IPrivateMessage
     * @property {string|null} [text] PrivateMessage text
     * @property {string|null} [senderId] PrivateMessage senderId
     * @property {string|null} [timestamp] PrivateMessage timestamp
     */

    /**
     * Constructs a new PrivateMessage.
     * @exports PrivateMessage
     * @classdesc Represents a PrivateMessage.
     * @implements IPrivateMessage
     * @constructor
     * @param {IPrivateMessage=} [properties] Properties to set
     */
    function PrivateMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PrivateMessage text.
     * @member {string} text
     * @memberof PrivateMessage
     * @instance
     */
    PrivateMessage.prototype.text = "";

    /**
     * PrivateMessage senderId.
     * @member {string} senderId
     * @memberof PrivateMessage
     * @instance
     */
    PrivateMessage.prototype.senderId = "";

    /**
     * PrivateMessage timestamp.
     * @member {string} timestamp
     * @memberof PrivateMessage
     * @instance
     */
    PrivateMessage.prototype.timestamp = "";

    /**
     * Creates a new PrivateMessage instance using the specified properties.
     * @function create
     * @memberof PrivateMessage
     * @static
     * @param {IPrivateMessage=} [properties] Properties to set
     * @returns {PrivateMessage} PrivateMessage instance
     */
    PrivateMessage.create = function create(properties) {
        return new PrivateMessage(properties);
    };

    /**
     * Encodes the specified PrivateMessage message. Does not implicitly {@link PrivateMessage.verify|verify} messages.
     * @function encode
     * @memberof PrivateMessage
     * @static
     * @param {IPrivateMessage} message PrivateMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PrivateMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
        if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.senderId);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified PrivateMessage message, length delimited. Does not implicitly {@link PrivateMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PrivateMessage
     * @static
     * @param {IPrivateMessage} message PrivateMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PrivateMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PrivateMessage message from the specified reader or buffer.
     * @function decode
     * @memberof PrivateMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PrivateMessage} PrivateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PrivateMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PrivateMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.text = reader.string();
                    break;
                }
            case 2: {
                    message.senderId = reader.string();
                    break;
                }
            case 3: {
                    message.timestamp = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PrivateMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PrivateMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PrivateMessage} PrivateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PrivateMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PrivateMessage message.
     * @function verify
     * @memberof PrivateMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PrivateMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            if (!$util.isString(message.senderId))
                return "senderId: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isString(message.timestamp))
                return "timestamp: string expected";
        return null;
    };

    /**
     * Creates a PrivateMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PrivateMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PrivateMessage} PrivateMessage
     */
    PrivateMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.PrivateMessage)
            return object;
        var message = new $root.PrivateMessage();
        if (object.text != null)
            message.text = String(object.text);
        if (object.senderId != null)
            message.senderId = String(object.senderId);
        if (object.timestamp != null)
            message.timestamp = String(object.timestamp);
        return message;
    };

    /**
     * Creates a plain object from a PrivateMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PrivateMessage
     * @static
     * @param {PrivateMessage} message PrivateMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PrivateMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.text = "";
            object.senderId = "";
            object.timestamp = "";
        }
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            object.senderId = message.senderId;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        return object;
    };

    /**
     * Converts this PrivateMessage to JSON.
     * @function toJSON
     * @memberof PrivateMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PrivateMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PrivateMessage
     * @function getTypeUrl
     * @memberof PrivateMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PrivateMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PrivateMessage";
    };

    return PrivateMessage;
})();

module.exports = $root;
