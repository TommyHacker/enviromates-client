import React from 'react';
import Button from 'react-bootstrap/Button';
const SignMeUp = ({ eventId }) => {
	const signUpHandler = ({ eventId }) => {
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
		fetch(`http://localhost:8000/events/${eventId}`, options)
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<>
			<Button className='navBtn' onClick={signUpHandler}>Sign Me Up eventId</Button>
		</>
	);
};

export default SignMeUp;
