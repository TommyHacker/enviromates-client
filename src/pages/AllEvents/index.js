import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import Accordion from 'react-bootstrap/Accordion';
import './style.css'
import teamwork1 from '../../assets/images/teamwork1.png'
import teamwork2 from '../../assets/images/teamwork2.png'
import teamwork3 from '../../assets/images/teamwork3.png'

const AllEvents = () => {

	const navigate = useNavigate();

	const events = useSelector((state) => state.events);

	const navigateHandler = (id) => {
		navigate(`/event/${id}`);
	};

	return (
		<>
		<h1 style={{margin:'25px', fontSize:'4rem', }}> Upcoming Events</h1>
			{events &&
				events.map((event, index) => {
					return (
						<motion.div
							initial={{opacity: 0, }}
							animate={{opacity: 1}}
							transition={{ delay: 0.1, duration: 1.2}}
							exit={{opacity: 0}}
							>	
							<Accordion defaultActiveKey="1" className='m-2 p-0 mt-4 event-title'>	
									<Accordion.Item eventKey="0">
											<Accordion.Header><h2>{event.title} <br/><span className='mt-2 challenge-info'> Challenge Level: {event.difficulty} </span></h2>
											</Accordion.Header>
												<Accordion.Body>
												<div onClick={() => navigateHandler(event.id)} key={index}>
													<h4>{event.description}</h4>
													<img src={event.img_before} style={{ height: '200px' }} />
												</div>	
											</Accordion.Body>
									</Accordion.Item>
							</Accordion>
						</motion.div>	
					);
				})}
		</>
	);
};

export default AllEvents;
