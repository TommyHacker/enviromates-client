import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../../components/ImageUpload';
import { MapStatic } from '../../components/';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const url = 'https://api.cloudinary.com/v1_1/dgoun8ulz/image/upload';

export default function CreateEvent() {
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [date, setDate] = useState('');
	const [image, setImage] = useState('');
	const [longitude, setLongitude] = useState('');
	const [latitude, setLatitude] = useState('');

	// set image state to uplaoded image on change
	const imageHandler = (e) => {
		setImage(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// prepare the image for cloudinary
		const formData = new FormData();
		formData.append('file', image);
		formData.append('upload_preset', 'my-uploads');

		//first ...  store the image through cloudinary

		const imageData = await fetch(url, { body: formData, method: 'POST' })
			.then((response) => response.json())
			.catch((err) => console.log(err));
		setImage(imageData.secure_url);

		const accesstoken = window.localStorage.getItem('accesstoken');

		formData.append('accesstoken', accesstoken);
		formData.append('title', title);
		formData.append('description', description);
		formData.append('difficulty', difficulty);
		formData.append('img-before', imageData.secure_url);
		formData.append('longitude', '45645');
		formData.append('latitude', '2343');

		axios.post('http://localhost:8000/events', formData);
	};

	return (
		<div>
			<Container>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formEventName'>
						<Form.Label>Name of the event</Form.Label>
						<Form.Control
							type='text'
							placeholder='Last name'
							name='eventName'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formDescription'>
						<Form.Label>Description</Form.Label>
						<Form.Control
							as='textarea'
							placeholder='Describe the event'
							name='description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Form.Group>

					<Form.Select
						className='mb-3'
						aria-label='Difficulty'
						onChange={(e) => setDifficulty(e.target.value)}>
						<option>Difficulty</option>
						<option value='1'>easy</option>
						<option value='2'>medium</option>
						<option value='3'>hard</option>
					</Form.Select>

					<Form.Group controlId='formEventDate'>
						<Form.Label>Select Event Start Date</Form.Label>
						<Form.Control
							type='date'
							name='eventDate'
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</Form.Group>

					{/* NEED SOME MARGIN HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
					<Form.Group controlId='formImageUpload' onChange={imageHandler}>
						<ImageUpload />
					</Form.Group>

					<Form.Group className='mb-3' controlId='formLocation'>
						<Form.Label>Click to select the location</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter the location'
							name='location'
						/>
					</Form.Group>

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
