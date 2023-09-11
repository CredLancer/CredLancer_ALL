import {Typography} from "antd";
import "./button.css"

interface CustomButtonProps {
    onclick: () => void
    showImage?: boolean
    buttonText: string

}

export default function CustomButton(props: CustomButtonProps) {
    const {onclick, showImage, buttonText} = props

    function handleButtonText() {
        if (buttonText.startsWith("aleo")) {
            return "aleo.." + buttonText.substring(buttonText.length - 4)
        }
        return buttonText
    }

    return (<div className={"myButton"} onClick={onclick}>
        {
            showImage ? <img src={"./aleo.png"} style={{height: "40px"}}/> : null
        }
        <Typography style={{color: "white", fontSize: "16px"}}>{handleButtonText()}</Typography>
    </div>)
}