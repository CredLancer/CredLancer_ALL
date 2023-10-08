import { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { WakuChat } from "~~/components/chat-waku/example-chat-component";

const TestWakuChat: NextPage = () => {
  return (
    <>
      <MetaHeader
        title="Example UI | Scaffold-ETH 2"
        description="Example UI created with 🏗 Scaffold-ETH 2, showcasing some of its features."
      >
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <WakuChat />
    </>
  );
};

export default TestWakuChat;
