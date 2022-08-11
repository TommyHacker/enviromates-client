import React, { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MapMarker = ({ event, index }) => {
	const difficultyTranslator = (num) => {
		let result;
		switch (num) {
			case '1':
				result = 'easy';
			case '2':
				result = 'medium';
			case '3':
				result = 'hard';
		}
		return result;
	};

	return (
		<div key={index}>
			<Marker position={[Number(event.latitude), Number(event.longitude)]}>
				<Popup>
					{event.title} <br />
					When: {event.start_date.slice(0, 10)}
					<br />
					Difficulty: {difficultyTranslator(event.difficulty)} <br />
					Attendees: 107 <br />
					<Link to={`/event/${event.id}`}>JOIN US</Link>
				</Popup>
			</Marker>
		</div>
	);
};

export default MapMarker;
