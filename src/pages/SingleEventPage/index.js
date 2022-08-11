import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { MapStatic } from '../../components';
import CompleteEvent from '../../components/CompleteEvent';
import SignMeUp from '../../components/SignMeUp';

const SingleEventPage = () => {
	const { id } = useParams();
	const events = useSelector((state) => state.events);
	const user = useSelector((state) => state.user);
	const [event, setEvent] = useState();
	const [loading, setLoading] = useState(true);
	const [host, setHost] = useState('');
	const [isHost, setIsHost] = useState(false);

	const getHostName = (author_id) => {
		const options = {
			method: 'GET',
			mode: 'cors',
		};

		fetch(
			`https://enviromates.herokuapp.com/users/author/${author_id}`,
			options
		)
			.then((res) => res.json())
			.then((data) => setHost(data.author));
	};

	useEffect(() => {
		setEvent(...events.filter((e) => e.id == id));

		// fetch event if not already populated....... backend not serving this yet.
		// const options = { method: 'GET', mode: 'cors' };
		// fetch(`http://localhost:8000/events/${id}`, options)
		// 	.then((res) => res.json())
		// 	.then((data) => console.log(data));
	}, []);

	useEffect(() => {
		try {
			getHostName(event.author_id);
		} catch (err) {
			console.log(err);
		}
	}, [event]);

	useEffect(() => {
		if (host === user.username) {
			setIsHost(true);
		} else {
			setIsHost(false);
		}
	}, [host]);
	return (
		<>
			<Container className='d-flex flex-column justify-content-center'>
				{event ? (
					<>
						<SignMeUp eventId={event.id} />
						{isHost && <CompleteEvent event={event} />}
						<h1>{event.title}</h1>
						<h2>{event.description}</h2>
						{host && (
							<h4>
								Host : {host} {isHost && '(You)'}
							</h4>
						)}
						<img style={{ width: '200px' }} src={event.img_before} />
						<h4>Start date: {event.start_date}</h4>
						<MapStatic event={event} host={host} />
					</>
				) : (
					'loading'
				)}
			</Container>
		</>
	);
};
export default SingleEventPage;
