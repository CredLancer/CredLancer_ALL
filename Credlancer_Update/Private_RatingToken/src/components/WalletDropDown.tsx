import CustomButton from "./customButton";
import { Dropdown, MenuProps, message, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useStore } from "../context";
import { cancelPre, walletDisConnect } from "../api";

interface WalletDropDowmProps {
  text: string;
}

export default function WalletDropDowm(props: WalletDropDowmProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const [copyData, setCopyData] = useState({
    value: "",
    copied: false,
  });

  const [state, dispatch] = useStore();

  useEffect(() => {
    if (copyData && copyData.copied) {
      success();
    }
  }, [copyData]);
  const { text } = props;
  const items: MenuProps["items"] = [
    {
      label: (
        <CopyToClipboard
          text={text}
          onCopy={() => {
            setCopyData({
              value: text,
              copied: true,
            });
          }}
        >
          <Typography
            style={{
              cursor: "pointer",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {"Copy Address"}
          </Typography>
        </CopyToClipboard>
      ),
      key: "0",
    },
    {
      label: (
        <Typography
          style={{
            cursor: "pointer",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: 500,
          }}
          onClick={disConnect}
        >
          {"Disconnect"}
        </Typography>
      ),
      key: "1",
    },
  ];

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Copied! ",
    });
  };

  async function disConnect() {
    dispatch({ type: "walletConnected", value: false });
    dispatch({ type: "currentAddress", value: "" });
    const res = await cancelPre();
    console.log(res);
    if (res) {
      await walletDisConnect();
    }
    res && message.success("Disconnected!");
    // await walletDisConnect();
    // message.success("已断开连接！");
  }

  return (
    <div>
      {contextHolder}
      <Dropdown
        menu={{ theme: "dark", items: items, inlineIndent: 2 }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <CustomButton
            showImage={text != ""}
            buttonText={text ? text : "Connect Wallet"}
            onclick={() => {}}
          />
        </a>
      </Dropdown>
    </div>
  );
}
