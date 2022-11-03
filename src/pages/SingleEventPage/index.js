import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { MapStatic } from '../../components';
import CompleteEvent from '../../components/CompleteEvent';
import SignMeUp from '../../components/SignMeUp';
import { motion } from 'framer-motion';
import './style.css';
import SocialIcons from '../../components/SocialIcons';

const SingleEventPage = () => {
	const { id } = useParams();
	const events = useSelector((state) => state.events);
	const user = useSelector((state) => state.user);
	const [event, setEvent] = useState();
	const [loading, setLoading] = useState(true);
	const [host, setHost] = useState('');
	const [isHost, setIsHost] = useState(false);
	const [isSignedUp, setIsSignedUp] = useState(false);

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
		if (events.length < 2) {
			// fetch event if not already populated....... backend not serving this yet.
			const options = { method: 'GET', mode: 'cors' };
			fetch(`https://enviromates.herokuapp.com/events/${id}`, options)
				.then((res) => res.json())
				.then((data) => setEvent(data.event));
		}
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
				<div className='single-event m-4 p-2 d-flex flex-column justify-content-center'>
					{event ? (
						<div className='m-2'>
							{/* if is the host, add */}
							<h1 className='p-4 display-1 text-center'>
								{capitalize(event.title)}
							</h1>
							{isHost && (
								<h4 className='subtitle'>You are hosting this event.</h4>
							)}
							{!isHost && (
								<h3 className='display-4 my-3 subtitle'>
									Here is {host}'s event
								</h3>
							)}
							<h4 className='mb-3 subtitle'>{capitalize(event.description)}</h4>
							<img
								className='m-auto p-2'
								style={{ width: '200px' }}
								src={event.img_before}
							/>
							<h3 className='display-4 my-5 subtitle'>
								Start date<h4 className='mb-3'>{event.start_date}</h4>
							</h3>
							<MapStatic event={event} host={host} />
							{/* if not the host, show the join button */}
							<div className='d-flex flex-column justify-content-center my-5'>
								{!isHost && <SignMeUp eventId={id} />}
								{isHost && <CompleteEvent event={event} />}
							</div>
							<SocialIcons
								message={event.description}
								host={host}
								id={event.id}
							/>
						</div>
					) : (
						<h3 className='display-2'>Loading...</h3>
					)}
				</div>
			</motion.div>
		</>
	);
};
export default SingleEventPage;
