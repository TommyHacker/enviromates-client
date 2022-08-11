import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { MapStatic } from '../../components';
import CompleteEvent from '../../components/CompleteEvent';
import SignMeUp from '../../components/SignMeUp';
import { motion } from 'framer-motion';

const SingleEventPage = () => {
	const { id } = useParams();
	const events = useSelector((state) => state.events);
	const user = useSelector((state) => state.user);
	const [event, setEvent] = useState();
	const [loading, setLoading] = useState(true);
	const [host, setHost] = useState('');
	const [isHost, setIsHost] = useState(false);

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

	const getHostName = () => {
		const options = {
			method: 'GET',
			mode: 'cors',
		};

		fetch(`https://enviromates.herokuapp.com/users/author/${id}`, options)
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
			getHostName(id);
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
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.1, duration: 1.2 }}
				exit={{ opacity: 0 }}
				style={{ margin: 'auto', height: '100%' }}>

				<Container>
					
				</Container>	

				<Container className='d-flex flex-column justify-content-center'>
					{event ? (
						<>
							{/* if not the host, show the join button */}
							{!isHost && <SignMeUp eventId={id} />}
							{/* if is the host, add */}
							{isHost && <CompleteEvent event={event} />}
							<h1>{capitalize(event.title)}</h1>
							<h2>{capitalize(event.description)}</h2>
							{isHost && <h4>You are hosting this event.</h4>}
							{!isHost && <h4>{host}</h4>}
							<img style={{ width: '200px' }} src={event.img_before} />
							<h4>Start date: {event.start_date}</h4>
							<MapStatic event={event} host={host} />
						</>
					) : (
						'loading'
					)}
				</Container>
			</motion.div>
		</>
	);
};
export default SingleEventPage;
