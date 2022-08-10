import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux-toolkit/user';
import axios from 'axios';

const RegisterForm = ({ setSwitchForm }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);

	const [username, setUsername] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('username', username);
		formData.append('first-name', firstName);
		formData.append('last-name', lastName);
		formData.append('email', email);
		formData.append('password', password);
		console.log('going to post fetch to login now');

		const options = {
			method: 'POST',
			mode: 'cors',
			body: formData,
		};

		fetch('https://enviromates.herokuapp.com/users/register', options)
			.then((result) => result.json())
			.then((res) => {
				if (res.success === 'True') {
					try {
						console.log(res);
						// remove old access token incase there is one
						window.localStorage.removeItem('accesstoken');
						// store new fresh accesstoken
						window.localStorage.setItem('accesstoken', res.token);

						// grab the user data
						const data = res.user;

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
						navigate('/');
					} catch (err) {
						console.log(err);
					}
				} else {
					return;
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Container>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='registerUsername'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type='text'
							placeholder='Type your username'
							name='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formFirstName'>
						<Form.Label>First name</Form.Label>
						<Form.Control
							type='text'
							placeholder='First name'
							name='firstName'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formLastName'>
						<Form.Label>Last name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Last name'
							name='lastName'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter your email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='registerPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Type your password'
							name='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
					<p onClick={() => setSwitchForm((prev) => !prev)}>
						Already have an account? Login here
					</p>
				</Form>
			</Container>
		</div>
	);
};

export default RegisterForm;
