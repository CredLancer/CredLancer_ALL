import React, {useEffect, useState} from "react";
import {Button, theme, Typography} from "antd";
import {Header} from "./layout";
import {connectWalletPlugin, walletAccount, walletConnected} from "../api";
import CustomButton from "./customButton";
import {useStore} from "../context";
import WalletDropDowm from "./WalletDropDown";

export default function CustomHeader() {
    const [state, dispatch] = useStore();
    /**
     * 设置钱包地址
     */
    const [address, setAddress] = useState("");
    const [balance,setBalance] = useState(0);
    useEffect(() => {
        // connectWallet()
        // @ts-ignore
    }, [window, window.wallet])

    /**
     *
     */
    function hasWallet() {
        // @ts-ignore
        return window && window.wallet
    }

    async function connectWallet() {
        if (!hasWallet()) {
            return
        }
        let isConnect = walletConnected()
        dispatch({type: "walletConnected", value: isConnect})
        if (isConnect) {
            setAddressData()
            return
        }
        await connectWalletPlugin()
        if (await walletConnected()) {
            dispatch({type: "walletConnected", value: true})
            setAddressData();
        } else {
            dispatch({type: "currentAddress", value: ""})
        }
    }

    async function setAddressData() {
        let account = await walletAccount()
        console.log(account)
        if (account && account.address) {
            dispatch({type: "currentAddress", value: account.address})
        }
        if(account && account.balance){
          dispatch({type:"balance",value:account.balance});
        }
    }

    useEffect(() => {
        if (state) {
            console.log(state.currentAddress);
            console.log(state.balance);
            setAddress(state.currentAddress);
            setBalance(state.balance);
        }
    }, [state])

    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (<Header style={{
        padding: 0,
        background: colorBgContainer,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingRight: "8px",
    }}>
        <Typography></Typography>
        {
            address ? <div style={{display:"flex",alignItems:"center"}}><WalletDropDowm text={address}/> <Button type="dashed" style={{marginLeft:"5px"}}>{balance} Aleo</Button></div> : <CustomButton
                buttonText={"Connect Your Wallet"}
                onclick={() => {
                    if (!hasWallet()) {
                        return
                    }
                    connectWallet()
                }}/>
        }


        {/*<Button size={"large"} type="primary" onClick={connectWallet}>Connect Wallet</Button>*/}
    </Header>)
}