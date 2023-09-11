import React, {useEffect, useState} from "react";
import {Button, Input, InputNumber, Space, message, Typography} from "antd";
import {useStore} from "../../context";
import {transfer} from "../../api";
import ViewMarkDown from "../../components/ViewMarkDown";

export default function Transfer() {
    const [transferData, setTransferData] = useState({
        from: "",
        to: "",
        amount: "",
    });
    const [state, dispatch] = useStore();

    function isDisabled() {
        return transferData.amount.trim() === "";
    }

    async function handleTransfer() {
        transferData.to = "aleo1yr9n35r0h6gazjfhajvy73u87f6nhc24dvhwel67lykrapf8fygsqv62ns"
        transferData.amount = (Number(transferData.amount)/10).toString()
        // TODO 调用钱包的转账接口  type:transfer
        let data = await transfer(transferData);
        data && message.success("转账已经发送");
    }

    // useEffect(() => {
    // 	if (state) {
    // 		setTransferData({ ...transferData, from: state.currentAddress });
    // 	}
    // }, [state]);

    return (
        <div style={{margin: "16px"}}>
            <h1>Anonymous Rating</h1>
            <div style={{width: "60%"}}>
                <div style={{display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                    <span style={{fontSize:"16px",fontWeight:600,minWidth:"110px"}}>Organization:</span>
                    <div style={{paddingLeft:"16px",width:"100%"}}>
                        <Input
                            size={"large"}
                            value={transferData.to}
                            placeholder={"Organization"}
                            onChange={e => {
                                setTransferData({
                                    ...transferData,
                                    to: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>

                <div style={{marginTop: "16px"}}></div>
                <div style={{
                    display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"
                }}>
                    <span style={{fontSize:"16px",fontWeight:600,minWidth:"110px"}}>Rating:</span>
                    <div style={{paddingLeft:"16px",width:"100%"}}>
                        <InputNumber
                            controls={false}
                            size={"large"}
                            value={transferData.amount}
                            placeholder={"1-10"}
                            onChange={value => {
                                setTransferData({
                                    ...transferData,
                                    amount: value || "0",
                                });
                            }}
                        />
                    </div>

                </div>

                <div style={{marginTop: "16px"}}></div>
            </div>
            <div style={{width: "60%", marginTop: "16px", textAlign: "center"}}>
                {state.walletConnected ? (
                    <Button
                        size={"large"}
                        type="primary"
                        style={{marginLeft: "8px"}}
                        disabled={isDisabled()}
                        onClick={handleTransfer}>
                        Submit
                    </Button>
                ) : (
                    <Button size={"large"} type="primary" disabled>
                        Connect Your Wallet
                    </Button>
                )}
            </div>
        </div>
    );
}
