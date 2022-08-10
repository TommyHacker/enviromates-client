import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Map } from '../../components';
import { motion } from 'framer-motion'

export default function User() {
	const navigate = useNavigate();

	return (
		<>
		<motion.div
			initial={{opacity: 0, }}
			animate={{opacity: 1}}
			transition={{ delay: 0, duration: 1.5}}
			exit={{opacity: 0}}
			style={{marginTop:'20vh', height:'100%'}}
			>
			<main>
				{/* <h2>Welcome there, {username}!</h2> */}
				<br />
				<br />
				<Button variant='info' onClick={() => navigate('/create-event')}>
					Create an Event
				</Button>
				<Button variant='info' onClick={() => navigate('/attend-event')}>
					Attend an Event
				</Button>
			</main>

			<Container>
				<Map />
			</Container>

			
			</motion.div>
		</>
	);
}
