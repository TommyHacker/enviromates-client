import React from 'react'
import { useLottie } from "lottie-react";
import submitBtnAnimation from '../../assets/animations/submitBtn.json'
import Button from 'react-bootstrap/Button'

const style = {
    height: 300,
};

export default function SubmitButton() {

    // const [button, setButton] =
    
    const options = {
        animationData: submitBtnAnimation,
        loop: 1
    }
    
    const { View } = useLottie(options, style);
    
    function handleClick(){
        return View
    }

    return (
        <>
            <Button type="submit" onClick={ handleClick }>Send</Button>
             {/* <h3>Thank you!</h3> */}
        </>
    )
}


