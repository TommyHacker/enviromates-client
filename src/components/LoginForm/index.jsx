import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SubmitButton from '../SubmitButton';
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { userActions } from '../../redux-toolkit/user';

export default function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.user);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('username', username);
		formData.append('password', password);
		console.log('going to post fetch to login now');
		axios
			.post('http://localhost:8000/users/login', formData)
			.then((res) => {
				if (res.data.success === 'True') {
					console.log(res);
					// remove old access token incase there is one
					window.localStorage.removeItem('accesstoken');
					// store new fresh accesstoken
					window.localStorage.setItem('accesstoken', res.data.token);

					// grab the user data
					const data = res.data.user;

					// update user data
					dispatch(
						userActions.setUser({
							...user,
							id: data.id,
							username: data.username,
							firstName: data.first_name,
							lastName: data.last_name,
							email: data.email,
							eventsAttended: data.events_attended_by_user,
							eventsHosted: data.events_hosted_by_user,
							createdAt: data.created_at,
						})
					);
				} else {
					return;
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<Container>
				<h1>FUCCIN LOGIN MEIGHT"</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='username'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type='text'
							placeholder='Type your username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Type your password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					<SubmitButton />

					{/* <Button className="submitBtn" variant="primary" type="submit">Submit</Button> */}
				</Form>
			</Container>
		</>
	);
}
