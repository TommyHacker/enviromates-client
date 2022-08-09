import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../../components/ImageUpload';
import { MapStatic } from '../../components/';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function CreateEvent() {
	const [state, setState] = useState({
		username: '',
		location: '',
		eventName: '',
		description: '',
	});
	const [level, setLevel] = useState('');
	const [eventDate, setEventDate] = useState('');
	const [submitDetails, setSubmitDetails] = useState('');
	const navigate = useNavigate();

	function handleInput(e) {
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value,
		});
	}

	function handleLevel(e) {
		setLevel(e.target.value);
	}

	function handleEventDate(e) {
		setEventDate(e.target.value);
	}

	// function handleSubmit(e){
	//     e.preventDefault()
	//     setSubmitDetails(
	//       username,
	//       location,
	//       eventName,
	//       description,
	//       level,
	//       eventDate
	//     )
	{
		/* navigate where ?? */
	}
	//     navigate('/')
	// }

	function handleSubmit(e) {
		e.preventDefault();
		setSubmitDetails('Submitting...');
		fetch('http://localhost:5000/api/create-event', {
			method: 'POST',
			body: JSON.stringify(state),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					setSubmitDetails('Successfully registered!');
					navigate('/:username/create-event');
				} else {
					setSubmitDetails(data.message);
				}
			})
			.catch((err) => {
				setSubmitDetails('Error!');
			});
	}

	return (
		<div>
			<Container>
				<Form onSubmit={handleSubmit}>
					{/* <Form.Group className="mb-3" controlId="hostUsername">
              <Form.Label>Host Username</Form.Label>
              <Form.Control type="text" placeholder="Type your username" name="username" value={state.username} onChange={handleInput} />
          </Form.Group> */}

					<Form.Group className='mb-3' controlId='formEventName'>
						<Form.Label>Name of the event</Form.Label>
						<Form.Control
							type='text'
							placeholder='Last name'
							name='eventName'
							value={state.eventName}
							onChange={handleInput}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formDescription'>
						<Form.Label>Description</Form.Label>
						<Form.Control
							as='textarea'
							placeholder='Describe the event'
							name='description'
							value={state.description}
							onChange={handleInput}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formLocation'>
						<Form.Label>Click to select the location</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter the location'
							name='location'
							value={state.location}
							onChange={handleInput}
						/>
					</Form.Group>

					<Form.Select
						className='mb-3'
						aria-label='Difficulty'
						onClick={handleLevel}>
						<option>Difficulty</option>
						<option value='easy'>1</option>
						<option value='medium'>2</option>
						<option value='hard'>3</option>
					</Form.Select>

					<Form.Group controlId='formEventDate' onClick={handleEventDate}>
						<Form.Label>Select Date</Form.Label>
						<Form.Control
							type='date'
							name='eventDate'
							value={state.eventDate}
						/>
					</Form.Group>

					<Form.Group controlId='formImageUpload'>
						<ImageUpload />
					</Form.Group>
					{/* additional fields ??? */}

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</Container>

			{/* MAP COMPONENT ------------------------- */}
			<Container>
				<MapStatic />
			</Container>
		</div>
	);
}
