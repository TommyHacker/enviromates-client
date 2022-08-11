import React from 'react';
import './style.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const MapStatic = ({ event, host }) => {
	const capitalize = (e) => {
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
	};

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

	return (
		// Each Component needs to be declared
		<div>
			<MapContainer
				className='map-container'
				center={[Number(event.latitude), Number(event.longitude)]}
				zoom={13}
				scrollWheelZoom={false}
				zoomControl={false}
				doubleClickZoom={false}
				dragging={false}
				zoomSnap={false}
				trackResize={false}
				touchZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>

				<Marker position={[Number(event.latitude), Number(event.longitude)]}>
					<Popup>
						--ALERT-- <br />
						Date: {event.start_date.slice(0, 10)} <br />
						Challenge: {difficultyTranslator(event.difficulty)} <br />
						Host: {capitalize(host)} <br />
						Attendees: 107 <br />
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapStatic;
