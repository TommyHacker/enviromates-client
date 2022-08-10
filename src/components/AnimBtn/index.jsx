
import React, { useRef, useEffect } from 'react'
import lottie from "lottie-web"
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/esm/Container';
import AnimationBtn from '../../assets/animations/AnimationBtn.json'
import './style.css'

export default function AnimBtn() {

    const anime = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: AnimationBtn
        });
        return () => lottie.stop();        
    }, []);

    return <div style={{ height: 250, width: 300 }} ref={anime}></div>;
    
    
    
    
    // const [isActive, setIsActive] = useState(false);
    // const svgContainer = useRef();
    
    

    // function handleClick(event){
    //     setIsActive(current => !current);
    //     animItem.goToAndPlay(0,true)
    // }

    // return (
    //     <>
    //         <Container className="lottie-container">
    //             <div className='svgContainer' ref={svgContainer} id="svg"></div>
                {/* <div className={isActive ? 'svgContainer' : 'svgContainer hide'} ref={svgContainer} id="svg"></div> */}
                {/* <Button className="submitBtn" type="submit" onClick={ handleClick }>Send</Button>
            </Container> */}
          
             {/* <h3>Thank you!</h3> */}
    //     </>
    // )

    
    
}


