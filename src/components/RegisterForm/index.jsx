import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux-toolkit/user';
import axios from 'axios';
import AnimBtn from '../AnimBtn';

const RegisterForm = ({ setSwitchForm }) => {
	const [isLoading, setIsLoading] = useState(false);
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
		setIsLoading(true);
		const formData = new FormData();
		formData.append('username', username);
		formData.append('first-name', firstName);
		formData.append('last-name', lastName);
		formData.append('email', email);
		formData.append('password', password);

		const options = {
			method: 'POST',
			mode: 'cors',
			body: formData,
		};

		setTimeout(() => {
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
		}, 3600);
	};

	return (
		<div>
			<Container className='p-5 d-flex flex-column justify-content-center'>
				<Row className='p-3 d-flex flex-column justify-content-center'>
					<h1 className='display-2 text-center'>Register</h1>
					<p
						className='redirect text-center'
						onClick={() => setSwitchForm((prev) => !prev)}>
						Already have an account? <strong>Login here</strong>.
					</p>
				</Row>
				<Form className='form p-4' onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='registerUsername'>
						<Form.Label>
							<h3>Username</h3>
						</Form.Label>
						<Form.Control
							required
							className='input mb-3 p-2'
							type='text'
							placeholder='Type your username'
							name='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formFirstName'>
						<Form.Label>
							<h3>First name</h3>
						</Form.Label>
						<Form.Control
							required
							className='input p-2'
							type='text'
							placeholder='First name'
							name='firstName'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formLastName'>
						<Form.Label>
							<h3>Last name</h3>
						</Form.Label>
						<Form.Control
							required
							className='input p-2'
							type='text'
							placeholder='Last name'
							name='lastName'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formEmail'>
						<Form.Label>
							<h3>Email address</h3>
						</Form.Label>
						<Form.Control
							required
							className='input p-2'
							type='email'
							placeholder='Enter your email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='registerPassword'>
						<Form.Label>
							<h3>Password</h3>
						</Form.Label>
						<Form.Control
							required
							className='input p-2'
							type='password'
							placeholder='Type your password'
							name='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Row className='p-3 d-flex justify-content-center align-items-center'>
						{!isLoading ? (
							<button className='submitBtn' variant='primary' type='submit'>
								Submit
							</button>
						) : (
							<AnimBtn />
						)}
					</Row>
				</Form>
			</Container>
		</div>
	);
};

export default RegisterForm;
