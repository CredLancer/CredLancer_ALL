import protobuf from "protobufjs/light";
import {
    createLightNode,
    waitForRemotePeer,
    Protocols,
    createEncoder,
    createDecoder,
    utf8ToBytes,
    bytesToUtf8,
} from "@waku/sdk";
import { useEffect } from "react";

export function PersonComponent() {
    const contentTopic = "light-guide/1/person/proto";
    const encoder = createEncoder({ contentTopic, ephemeral: true });
    const decoder = createDecoder(contentTopic);

    async function createNode() {
        const node = await createLightNode({ defaultBootstrap: true });
        await node.start();
        await waitForRemotePeer(node, [Protocols.LightPush, Protocols.Filter]);
    }

    return (
        <div>
            <h1>Person Info</h1>
        </div>
    );
}
