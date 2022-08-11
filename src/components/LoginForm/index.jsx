import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { userActions } from '../../redux-toolkit/user';
import AnimBtn from '../AnimBtn';
import './style.css';

const LoginForm = ({ setSwitchForm }) => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.user);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const formData = new FormData();
		formData.append('username', username);
		formData.append('password', password);
		console.log('going to post fetch to login now');
		const options = {
			method: 'POST',
			mode: 'cors',
			body: formData,
		};

		setTimeout(() => {
			fetch('https://enviromates.herokuapp.com/users/login', options)
				.then((result) => result.json())
				.then((res) => {
					if (res.success === 'True') {
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
						navigate('/events');
					} else {
						return;
					}
				})
				.catch((err) => console.log(err));
		}, 3800);
	};

	return (
		<div>
			<Container className='p-5 d-flex flex-column justify-content-center'>
				<Row className='p-3 d-flex flex-column justify-content-center'>
					<h1 className='display-2 text-center'>Sign in</h1>
					<p
						className='redirect text-center'
						onClick={() => setSwitchForm((prev) => !prev)}>
						Don't have an account? Register <strong>here</strong>
					</p>
				</Row>
				<Form className='form p-4' onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='username'>
						<Form.Label>
							<h3>Username</h3>
						</Form.Label>
						<Form.Control
							className='input mb-3 p-2'
							type='text'
							placeholder='Type your username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='password'>
						<Form.Label>
							<h3>Password</h3>
						</Form.Label>
						<Form.Control
							className='input p-2'
							type='password'
							placeholder='Type your password'
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

export default LoginForm;
