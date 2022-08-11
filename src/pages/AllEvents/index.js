import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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
						<motion.div
							key={index}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.1, duration: 1.2 }}
							exit={{ opacity: 0 }}>
							<div onClick={() => navigateHandler(event.id)}>
								<div>
									<h2>{event.title}</h2>
									<h4>{event.description}</h4>
									<img src={event.img_before} style={{ height: '200px' }} />
								</div>
							</div>
						</motion.div>
					);
				})}
		</>
	);
};

export default AllEvents;
