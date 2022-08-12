import React, { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MapMarker = ({ event, index }) => {
	const difficultyTranslator = (num) => {
		let result;
		switch (num) {
			case '1':
				result = 'Easy';
			case '2':
				result = 'Medium';
			case '3':
				result = 'Hard';
		}
		return result;
	};

	const randomiseAttendees = () => {
		const result = Math.floor(Math.random() * 20);
		if (result < 3) return 5;
		return result;
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
		<div key={index}>
			<Marker position={[Number(event.latitude), Number(event.longitude)]}>
				<Popup>
					{capitalize(event.title)} <br />
					When: {event.start_date.slice(0, 10)}
					<br />
					Difficulty: {difficultyTranslator(event.difficulty)} <br />
					Attendees: {randomiseAttendees()} <br />
					<Link to={`/event/${event.id}`}>JOIN US</Link>
				</Popup>
			</Marker>
		</div>
	);
};

export default MapMarker;
