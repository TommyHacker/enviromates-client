import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import locationPointer from '../../assets/images/location-pointer.png';
import takeAction from '../../assets/images/take-action.png';
import './style.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import SocialIcons from '../../components/SocialIcons';

export default function Home() {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	function timer() {
		setTimeout(() => {
			// if logged go to create event page
			if (user.username && user.username != '') {
				navigate('/create-event');
			} else {
				// if not logged in, navigate to login
				navigate('/login');
			}
		}, 1000);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.1, duration: 1.3 }}
			exit={{ opacity: 0 }}>
			<Container className='h-60 d-flex flex-column justify-content-center'>
				<Row className='mt-5 pt-xl-4 d-flex justify-content-center'>
					<h1 className='display-1 text-center'>Making change, together!</h1>
				</Row>
				<Row>
					<Col className='my-5 d-flex justify-content-center justify-content-xl-end me-xl-5 align-items-center'>
						<Card className='p-3 p-xl-5 card'>
							<Card.Body>
								<Row className='align-items-start'>
									<Col className='my-xl-auto' xs={4}>
										<Image style={{ width: '3.8rem' }} src={locationPointer} />
									</Col>
									<Col xs={8}>
										<Card.Title>
											<h3 className='card-title'>Location Alert</h3>
										</Card.Title>
									</Col>
								</Row>
								<Card.Text className='py-3 card-text'>
									Mark a place to clean here. <br />
									Be an Enviromate!
								</Card.Text>
								<Row className='d-flex justify-content-center align-items-center'>
									<button className='navBtn' onClick={timer}>
										Get started
									</button>
								</Row>
							</Card.Body>
						</Card>
					</Col>
					<Col className='d-flex justify-content-center justify-content-xl-start ms-xl-5 align-items-center'>
						<Card className='p-3 p-xl-5 card'>
							<Card.Body>
								<Row className='align-items-start'>
									<Col xs={7}>
										<Card.Title>
											<h3 className='card-title'>Take Action!</h3>
										</Card.Title>
									</Col>
									<Col className='my-xl-auto' xs={5}>
										<Image
											className='me-1'
											style={{ width: '5.5rem' }}
											src={takeAction}
										/>
									</Col>
								</Row>
								<Card.Text className='py-3 card-text'>
									Ready to take action? Meet other Enviromates!
								</Card.Text>
								<Row className='d-flex justify-content-center align-items-center'>
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
