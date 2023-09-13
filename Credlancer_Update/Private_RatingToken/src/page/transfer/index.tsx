import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  notification,
  Rate,
  Select,
  SelectProps,
  Typography,
} from "antd";
import { useStore } from "../../context";
import { transfer, connectWalletPlugin, walletConnected } from "../../api";
import ViewMarkDown from "../../components/ViewMarkDown";

import { NotificationPlacement } from "antd/lib/notification/interface";

export default function Transfer() {
  const [rateNUmber, setRate] = useState(5);
  const [currentOption, setCurrentOption] = useState("Developer DAO");

  const [api, contextHolder] = notification.useNotification();

  // 通知框
  const openNotification = (placement: NotificationPlacement) => {
    api.success({
      message: `Submit Success!`,
      duration: null,
      description:
        "Thank you for taking the time to provide your valuable feedback. Your input helps us enhance the platform and create a better experience for everyone involved!",
      placement,
    });
  };

  // 顶部文本
  const desc = Desc();

  function Desc() {
    return `
        
        
## Introducing the Anonymous Rating Survey! 

We value your feedback on your experience with your employer or freelancer.  
Please rate your overall experience on a scale of 1 to 10, considering factors like **Quality**, **Communication**, and **Speed**.

## Quality 

The quality of proposed assignments.

## Communication 

Clarity of dialogue regarding project requirements. 

## Speed

Promptness in proposal submission, project review, and payout according to the agreed timeline.

`;
  }

  // 顶部文本
  const bottomdesc = BottomDesc();

  function BottomDesc() {
    return `
    Rest assured, your rating is completely private and confidential! 
    Your specific scores will not be revealed to the other party.
        `;
  }

  useEffect(() => {
    // connectWallet()
    // @ts-ignore
  }, [window, window.wallet]);

  /**
   *
   */
  function hasWallet() {
    // @ts-ignore
    return window && window.wallet;
  }

  const [state, dispatch] = useStore();
  // let isConnect = walletConnected();
  // dispatch({ type: "walletConnected", value: isConnect });

  // handleConnect
  async function handleConnect() {
    if (!hasWallet()) {
      window.open("https://chrome.google.com/webstore/detail/soter-aleo-wallet/kfpmpkkjaohgchlokcohbaokindffdjk", "_blank");
      return;
    }
    await connectWalletPlugin();
    let isConnect = walletConnected();
    dispatch({ type: "walletConnected", value: isConnect });
  }

  // 评分
  async function handleTransfer() {
    openNotification("bottomRight");
    await transfer({
      to: "aleo1yr9n35r0h6gazjfhajvy73u87f6nhc24dvhwel67lykrapf8fygsqv62ns",
      amount: rateNUmber.toString(),
    });
  }

  const options: SelectProps["options"] = [
    { value: "Developer DAO", label: "Developer DAO" },
    {
      value: "Starkware",
      label: "Starkware",
    },
    {
      value: "ACTxDesign",
      label: "ACTxDesign",
    },
  ];
  // @ts-ignore
  return (
    <>
      {contextHolder}
      <div style={{ display: "flex" }}>
        <div style={{ margin: "16px", width: "80%", overflow: "hidden" }}>
          {/* 文本一 */}
          <div style={{ textAlign: "left" }}>
            <ViewMarkDown textContent={desc} darkMode={false} />
          </div>

          {/* Connect Button */}
          <div
            style={{ width: "100%", marginTop: "16px", textAlign: "center" }}
          >
            {state.walletConnected ? (
              <Button
                size={"large"}
                type="primary"
                style={{ marginLeft: "8px" }}
                onClick={handleConnect}
              >
                Connected
              </Button>
            ) : (
              <Button
                size={"large"}
                type="primary"
                style={{ marginLeft: "8px" }}
                onClick={handleConnect}
              >
                Survey with Aleo
              </Button>
            )}
          </div>

          {/* Form */}
          <div style={{ width: "100%", paddingTop: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{ fontSize: "16px", fontWeight: 600, minWidth: "110px" }}
              >
                Organization:
              </span>
              <div style={{ paddingLeft: "16px", width: "100%" }}>
                {/*<Input size={"large"} placeholder={"Organization"} />*/}
                <Select
                  size={"large"}
                  value={currentOption}
                  onChange={(value) => {
                    setCurrentOption(value);
                  }}
                  style={{ width: 200 }}
                  options={options}
                />
              </div>
            </div>

            <div style={{ marginTop: "16px" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{ fontSize: "16px", fontWeight: 600, minWidth: "110px" }}
              >
                Rating:
              </span>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "left",
                  alignItems: "center",
                  paddingLeft: "16px",
                  width: "100%",
                }}
              >
                <Rate
                  count={10}
                  value={rateNUmber}
                  onChange={(value) => {
                    console.log(value);
                    setRate(value);
                  }}
                />
              </div>
            </div>

            <div style={{ marginTop: "24px" }}></div>
          </div>

          {/* // Submit */}
          <div
            style={{ width: "100%", marginTop: "16px", textAlign: "center" }}
          >
            <Button
              size={"large"}
              type="primary"
              style={{ marginLeft: "8px" }}
              disabled={!state.walletConnected}
              onClick={handleTransfer}
            >
              Submit
            </Button>
          </div>

          <div style={{ width: "100%", textAlign: "left", marginTop: "40px" }}>
            <ViewMarkDown textContent={bottomdesc} darkMode={false} />
          </div>
        </div>
      </div>
    </>
  );
}
