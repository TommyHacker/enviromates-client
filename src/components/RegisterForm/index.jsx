import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function RegisterForm() {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		console.log(e.target);
		// setSubmitDetails('Submitting...')
		// fetch('https://enviromates.herokuapp.com/users/', {
		// 			method: 'POST',
		// 			body: JSON.stringify(state),
		// 		})
		// 			.then((res) => res.json())
		// 			.then((data) => {
		// 				if (data.success) {
		// 					setSubmitDetails('Successfully registered!');
		// 					navigate('/login');
		// 				} else {
		// 					setSubmitDetails(data.message);
		// 				}
		// 			})
		// 			.catch((err) => {
		// 				setSubmitDetails('Error!');
		// 			});
	}

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
				</Form>
			</Container>
		</div>
	);
}
