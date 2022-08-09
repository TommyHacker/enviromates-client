import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [submitDetails, setSubmitDetails] = useState('');
	const navigate = useNavigate();

	function handleUsername(e) {
		setUsername(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setSubmitDetails(username, password);
		navigate('/:username', {
			state: { username: username, password: password },
		});
		setUsername('');
		setPassword('');
	}

	// POST username and password to the api/users/login
	const loginHandler = async (e) => {
		// set payload
		data = { username, password };
		try {
			const response = await axios.post(
				`${API_URL}/users/`,
				{ data },
				{ withcredentials: true }
			);
			const res = await response.json();
			console.log('response from api/users/login.post', res);
			// username/password AUTH has succeeded, store the access token for future AUTH
			if (res.data.success === 'True') {
				window.localStorage.setItem('accesstoken', res.data.accesstoken);

				// username/password AUTH has failed. redirect to /login again.
			} else {
				navigate('/login');
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='username'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type='text'
						placeholder='Type your username'
						value={username}
						onChange={handleUsername}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Type your password'
						value={password}
						onChange={handlePassword}
					/>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</>
	);
}
