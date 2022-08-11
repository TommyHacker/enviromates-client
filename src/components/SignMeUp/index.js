import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignMeUp = ({ eventId }) => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	const signUpHandler = () => {
		if (!user.username || user.username == '') {
			navigate('/login');
		}

		const formData = new FormData();
		const token = window.localStorage.getItem('accesstoken');
		formData.append('accesstoken', token);
		formData.append('join', 'true');
		formData.append('event-id', eventId);

		const options = {
			method: 'PATCH',
			mode: 'cors',
			body: formData,
		};
		// fetch(`https://enviromates.herokuapp.com/events/${eventId}`, options)
		console.log('sending to sign up ', token, eventId);
		// fetch(`https://enviromates.herokuapp.com/events/${eventId}`, options)
		fetch(`http://localhost:8000/events/${eventId}`, options)
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<>
			<Button onClick={signUpHandler}>Sign Me Up</Button>
		</>
	);
};

export default SignMeUp;
