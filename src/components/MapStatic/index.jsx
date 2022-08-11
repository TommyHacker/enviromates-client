import React from 'react';
import './style.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const MapStatic = ({ event, host }) => {
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
						Host: {host} <br />
						Attendees: 107 <br />
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapStatic;
