import { Message } from "./message-handler";
import { Protocols, RelayNode, createEncoder, createRelayNode, waitForRemotePeer } from "@waku/sdk";

const contentTopic = "content-topic/string/credlancer";

export async function initWaku(): Promise<RelayNode> {
  const waku = await createRelayNode({ defaultBootstrap: true });
  console.log("created waku node");
  await waku.start();

  console.log("started waku node");

  await waitForRemotePeer(waku, [Protocols.Relay]);

  console.log("found remote peer", waku);
  return waku;
}

export async function sendWakuMessage(waku: RelayNode, message: Message, callback: (res: boolean) => void) {
  const payload = new TextEncoder().encode(JSON.stringify(message));
  const encoder = createEncoder({
    contentTopic,
    ephemeral: true,
  });

  console.log("pushing");
  const res = await waku.relay.send(encoder, { payload });
  console.log("Message sent", res);
  callback(Boolean(res.recipients.length));
}
