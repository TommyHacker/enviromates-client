import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import locationPointer from '../../assets/images/location-pointer.png'
import takeAction from '../../assets/images/take-action.png'
import './style.css';
import { motion } from 'framer-motion'


export default function Home() {
  const navigate = useNavigate()
  
  function timer(){
    setTimeout(() => {
      navigate('/login')
      }, 1500)
  }

	return (
		<motion.div
			initial={{opacity: 0, }}
			animate={{opacity: 1}}
			transition={{ delay: 0, duration: 1.5}}
			exit={{opacity: 0}}
			style={{marginTop:'20vh', height:'100%'}}
			>
			{/* <img className='main-logo' src={logo} alt='logo'></img> */}
			<Container className='h-100 d-flex flex-column justify-content-center'
			style={{marginTop:'110px', height:'100%'}}>
				{/* <Image fluid src={logo} alt="logo"></Image> */}
				<Row className='mt-5 d-flex justify-content-center'>
					<h1 className='catch-phrase display-1'>Catch Phrase and Animation</h1>
				</Row>
				<Row>
					<Col className='my-5 d-flex justify-content-center align-items-center'>
						<Card className='p-3 card' style={{width: '18rem'}}>           
              <Card.Body>
                <Row className='align-items-start'>
                  <Col xs={4}>
                    <Image style={{width: '3.5rem'}} src={locationPointer} />  
                  </Col>
                  <Col xs={8}>
                    <Card.Title><h3 className='card-title'>Location Alert</h3></Card.Title>
                  </Col>
                </Row>
                <Card.Text>
                Mark a place to clean here. Be an Enviromate!
                </Card.Text>
                <Row className='d-flex justify-content-center align-items-center' >
                  <button className='navBtn' onClick={timer}>
                    Get started
                  </button>
                </Row>
              </Card.Body>    
						</Card>
					</Col>
					<Col className='d-flex justify-content-center align-items-center'>
						<Card className='p-3 card' style={{width: '18rem'}}>
							<Card.Body>
                <Row className='align-items-start'>
                  <Col xs={7}>
                  <Card.Title><h3 className='card-title'>Take Action!</h3></Card.Title>
                  </Col>
                  <Col xs={5}>
                    <Image className='me-1' style={{width: '5.5rem'}} src={takeAction} />
                  </Col>
                </Row>
								<Card.Text>
									Ready to take action ? Meet other Enviromates!
								</Card.Text>
                <Row className='d-flex justify-content-center align-items-center' >
								  <button className='navBtn' onClick={timer}>
                    Create an event
                  </button>
                </Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}
