import React, { useRef } from 'react'
import { useLottie } from "lottie-react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container';


export default function SubmitButton() {

    const svgContainer = useRef();
    
    const animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: "svg",
        loop: false,
        autoplay: false,
        path: "https://assets10.lottiefiles.com/private_files/lf30_9eI41y.json"
    })

    function handleClick(){
        svgContainer.className.remove('hide')
        animItem.goToAndPlay(0,true)
    }

    return (
        <>
            <Container className="lottie-container">
                <div className="svgContainer hide" ref={svgContainer} id="svg"></div>
                <Button className="submitBtn" type="submit" onClick={handleClick}>Send</Button>
            </Container>
          
             {/* <h3>Thank you!</h3> */}
        </>
    )
}


