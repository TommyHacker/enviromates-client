import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logo from '../../assets/images/logo.png';
import './style.css';
import { motion } from 'framer-motion'

export default function Home() {
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
					<Col></Col>
					<h1 className='catch-phrase display-1'>Catch Phrase and Animation</h1>
				</Row>
				<Row>
					<Col className='my-5 d-flex justify-content-center align-items-center'>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant='top' src='holder.js/100px180' />
							<Card.Body>
								<Card.Title>Location Alert</Card.Title>
								<Card.Text>
									Mark a place to clean here. Be an Enviromate!
								</Card.Text>
								<button className='navBtn'>Get started</button>
							</Card.Body>
						</Card>
					</Col>
					<Col className='d-flex justify-content-center align-items-center'>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant='top' src='holder.js/100px180' />
							<Card.Body>
								<Card.Title>Location Alert</Card.Title>
								<Card.Text>
									Ready to take action ? Meet other Enviromates!
								</Card.Text>
								<button className='navBtn'>Create an event</button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}
