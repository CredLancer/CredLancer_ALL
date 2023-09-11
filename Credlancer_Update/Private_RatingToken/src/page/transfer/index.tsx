import React, { useState } from "react";
import { Button, Input, notification, Rate, Typography } from "antd";
import { useStore } from "../../context";
import { transfer } from "../../api";
import ViewMarkDown from "../../components/ViewMarkDown";

import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { NotificationPlacement } from "antd/lib/notification/interface";

export default function Transfer() {
  const [rateNUmber, setRate] = useState(5);

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

The quality of assignments proposed by the employer.

## Communication 

The clarity of dialogue back and forth related to project requirements. 

## Speed

The speed of proposal and final project review and payout, according to agreed timeline.

`;
  }

  // 顶部文本
  const bottomdesc = BottomDesc();
  function BottomDesc() {
    return `


Rest assured, your rating is completely private and confidential! Our ZK analytics leverage averages to promote accountability, while maintaining the anonymity of individual reviewers. Your specific scores will not be revealed.
        `;
  }
  const [state, dispatch] = useStore();

  // 评分
  async function handleTransfer() {
    openNotification("bottomRight");
    await transfer({
      to: "aleo1yr9n35r0h6gazjfhajvy73u87f6nhc24dvhwel67lykrapf8fygsqv62ns",
      amount: ((rateNUmber * 2) / 10).toString(),
    });
  }

  // @ts-ignore
  return (
    <>
      {contextHolder}
      <div style={{ display: "flex" }}>
        <div style={{ margin: "16px", width: "80%", overflow: "hidden" }}>
          <div style={{ textAlign: "left" }}>
            <ViewMarkDown textContent={desc} darkMode={false} />
          </div>
          
          <div style={{ width: "80%", paddingTop: "16px" }}>
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
                <Input size={"large"} placeholder={"Organization"} />
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
                  allowHalf
                  value={rateNUmber}
                  onChange={(value) => {
                    console.log(value);
                    setRate(value);
                  }}
                />
                <Typography
                  style={{
                    marginLeft: "32px",
                    fontSize: "18px",
                    textAlign: "center",
                    marginTop: "2px",
                  }}
                >
                  {rateNUmber * 2}
                </Typography>
              </div>
            </div>

            <div style={{ marginTop: "24px" }}></div>
          </div>

          <div style={{ width: "100%", textAlign: "left" }}>
            <ViewMarkDown textContent={bottomdesc} darkMode={false} />
          </div>
          <div style={{ width: "80%", marginTop: "16px", textAlign: "center" }}>
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
        </div>
      </div>
    </>
  );
}
