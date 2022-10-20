import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Map } from '../../components';
import trophy from '../../assets/images/trophy.png'
import { motion } from 'framer-motion'
import { Row } from 'react-bootstrap';

export default function User() {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();

	function timerCreate(){
		setTimeout(() => {
		  navigate('/create-event')
		  }, 1100)
	}
	
	function timerJoin(){
		setTimeout(() => {
		  navigate('/events')
		  }, 1100)
	}

	return (
		<>
			<motion.div
				initial={{opacity: 0, }}
				animate={{opacity: 1}}
				transition={{ delay: 0.1, duration: 1.2}}
				exit={{opacity: 0}}
				style={{ margin: 'auto', height:'100%'}}
				>
				<div className="mx-5 py-5 contentbg">
					<h1 className="py-5 text-center display-1">Hello {user.username}!</h1>
					<div>
						<h2 className="mb-4 display-5 text-center">Daily Login <br/>Streak Day<h2 className="streak">Two</h2></h2>
						<img src={trophy} className="pt-4 pb-5 streak-img"/>			
						<h3 className="display-5 text-center">You've Earned <h3 className="streak">5 Points!</h3></h3>
						<h3 className="pb-3 display-6 text-center">Total points earned this month: 136</h3>
					</div>
				
					<Container className="content">
						<Row className='m-4'>
							<button className="navBtn" onClick={timerCreate}>
							Create an Event
							</button>
						</Row>
						<Row className='m-4'>
							<button className="navBtn" onClick={timerJoin}>
							Attend an Event
							</button>
						</Row>					
					</Container>
				</div>				
			</motion.div>
		</>
	);
}
