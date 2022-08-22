import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import Accordion from 'react-bootstrap/Accordion';
import './style.css'

const AllEvents = () => {

	const navigate = useNavigate();

	const events = useSelector((state) => state.events);

	const navigateHandler = (id) => {
		navigate(`/event/${id}`);
	};

	const capitalize = (e) => {
		try {
			let word = e.split('');
			let arr = [];
			for (let i = 0; i < word.length; i++) {
				if (i == 0) {
					arr.push(word[i].toUpperCase());
				} else {
					arr.push(word[i]);
				}
			}
			return arr.join('');
		} catch (err) {
			return e;
		}
	};

	return (
		<>
			<Container className='p-5 d-flex flex-column justify-content-center'>
				<h1 className='text-center display-1'>Meet other EnviroMates!</h1>
				<h4 className='text-center subtitle'>Join one of our events</h4>
			</Container>
			<div className='events-list p-4 mx-3 d-flex flex-column justify-content-center'>
				{events &&
					events.map((event, index) => {
						return (
							<div className='all-events-container'>
								<motion.div
									initial={{opacity: 0, }}
									animate={{opacity: 1}}
									transition={{ delay: 0.1, duration: 1.2}}
									exit={{opacity: 0}}
									>	
										<Accordion defaultActiveKey="1" className='m-2 p-0 mt-4 '>	
												<Accordion.Item eventKey="0">
														<Accordion.Header><h2 className='event-title'>{event.title} <br/><span className='mt-2 challenge-info'> Challenge Level: {event.difficulty} </span></h2>
														</Accordion.Header>
															<Accordion.Body className='backgroundColor'>
																<div className='mb-5'>
																	<h4><span className='title-main mt-2'>{capitalize(event.title)}</span></h4>
																		<div  onClick={() => navigateHandler(event.id)} key={index}>
																			<h5 className='fs-6 mt-3 mb-4'>{capitalize(event.description)}</h5>
																			<img src={event.img_before} style={{ maxHeight: '200px', maxWidth: '300px', margin:'auto'}} />
																		</div>
																</div>
															</Accordion.Body>
												</Accordion.Item>
										</Accordion>
								</motion.div>	
							</div>
						);
					})}
			</div>
		</>
	);
};

export default AllEvents;
