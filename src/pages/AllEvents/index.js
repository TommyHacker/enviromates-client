import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const AllEvents = () => {
	const navigate = useNavigate();

	const events = useSelector((state) => state.events);

	const navigateHandler = (id) => {
		navigate(`/event/${id}`);
	};

	return (
		<>
			{events &&
				events.map((event, index) => {
					return (
						<div onClick={() => navigateHandler(event.id)} key={index}>
							<div>
								<h2>{event.title}</h2>
								<h4>{event.description}</h4>
								<img src={event.img_before} style={{ height: '200px' }} />
							</div>
						</div>
					);
				})}
		</>
	);
};

export default AllEvents;
