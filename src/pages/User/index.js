import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Map } from '../../components';
import trophy from '../../assets/images/trophy.png'
import { motion } from 'framer-motion'

export default function User() {
	const navigate = useNavigate();

	return (
		<>
		<div className="contentbg">
			<h1 className="usergreet">Hello (User)!</h1>
			<br/>
			<br/>
			<div>
			<h2 className="usergreet2">Daily Login Streak Day <h2 className="streak">Two</h2></h2>
			<br/>
			<img src={trophy} className="streak-img"/>
			<br/>
			<br/>
			<h3 className="usergreet2">You've Earned <h3 className="streak">5 Points!</h3></h3>
			<br/>
			<br/>
			<h3 className="points">Total points earned this month: 136</h3>
			</div>
			
			<Container className="content">
		<motion.div
			initial={{opacity: 0, }}
			animate={{opacity: 1}}
			transition={{ delay: 0.1, duration: 1.2}}
			exit={{opacity: 0}}
			style={{ margin: 'auto', height:'100%'}}
			>
				</motion.div>
			
				{/* <h2>Welcome there, {username}!</h2> */}
				<br />
				<br />
				<Button className="navBtn" variant='info' onClick={() => navigate('/create-event')}>
					Create an Event
				</Button>
				<Button className="navBtn" variant='info' onClick={() => navigate('/attend-event')}>
					Attend an Event
				</Button>
				</Container>

			<br/>
			<br/>

			{/* <Container>
				<Map />
			</Container> */}

			</div>
			
		
		</>
	);
}
