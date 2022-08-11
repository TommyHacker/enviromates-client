import React, { useRef, useEffect, useState, useMemo } from 'react';
import './style.css';
import {
	MapContainer,
	TileLayer,
	useMap,
	setMap,
	useMapEvents,
	useMapEvent,
} from 'react-leaflet';
import Coordinates from '../Coordinates';
import axios from 'axios';
import MapMarker from '../MapMarker';
import { useSelector, useDispatch } from 'react-redux';

function Map() {
	const currentLocation = useSelector((state) => state.currentLocation);
	const events = useSelector((state) => state.events);

	// const getAllEvents = async () => {
	// 	const options = {
	// 		method: 'GET',
	// 		mode: 'cors',
	// 	};
	// 	const result = await fetch(
	// 		'https://enviromates.herokuapp.com/events',
	// 		options
	// 	)
	// 		.then((result) => result.json())
	// 		.then((res) => setEvents(res.events));
	// };

	// useEffect(() => {
	// 	getAllEvents();
	// }, []);

	const [map, setMap] = useState(null);
	const center = [currentLocation.latitude, currentLocation.longitude];
	const zoom = 13;
	const displayMap = useMemo(
		() => (
			<div>
				<MapContainer
					className='map-container'
					center={center}
					zoom={zoom}
					scrollWheelZoom={false}
					ref={setMap}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					{events &&
						events.map((event, index) => {
							return <MapMarker key={index} event={event} index={index} />;
						})}
				</MapContainer>
			</div>
		),
		[currentLocation]
	);

	return (
		<div className='map-box'>
			{map ? <Coordinates map={map} /> : null}
			{displayMap}
		</div>
	);
}

export default Map;
