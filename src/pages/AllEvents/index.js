import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css';

const AllEvents = () => {
	const navigate = useNavigate();

	const events = useSelector((state) => state.events);

	const navigateHandler = (id) => {
		navigate(`/event/${id}`);
	};

	return (
		<>
			<Container className='p-5 d-flex flex-column justify-content-center'>
				<h1 className='text-center display-1'>Meet other Enviromates!</h1>
				<h4 className='text-center subtitle'>Join one of our events</h4>
			</Container>
			<div className='events-list p-4 mx-3 d-flex flex-column justify-content-center'>
				{events &&
					events.map((event, index) => {
						return (
							<>
							
								<div  onClick={() => navigateHandler(event.id)} key={index}>
									<div className='mb-5'>
										<h2 className='display-3'>{event.title}</h2>
										<h5>{event.description}</h5>
										<img src={event.img_before} style={{ maxHeight: '200px', maxWidth: '300px'}} />
									</div>
								</div>
								
							</>
						);
					})
				}

			</div>
		</>
	);
};

export default AllEvents;
