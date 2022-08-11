import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../../components/ImageUpload';
import { Map } from '../../components';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import AnimBtn from '../../components/AnimBtn';
import { motion } from 'framer-motion';
const url = 'https://api.cloudinary.com/v1_1/dgoun8ulz/image/upload';
import { useSelector } from 'react-redux';

export default function CreateEvent() {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const currentLocation = useSelector((state) => state.currentLocation);
	const user = useSelector((state) => state.user);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [date, setDate] = useState('');
	const [image, setImage] = useState('');

	// set image state to uplaoded image on change
	const imageHandler = (e) => {
		setImage(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
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
		formData.append('longitude', currentLocation.longitude);
		formData.append('latitude', currentLocation.latitude);

		const options = {
			method: 'POST',
			mode: 'cors',
			body: formData,
		};

		setTimeout(() => {
			fetch('https://enviromates.herokuapp.com/events/', options)
				.then((response) => response.json())
				.then((res) => {
					if (res.success === 'True') {
						return navigate(`/events/${res.data.id}`);
					} else {
						navigate('/events');
					}
				})
				.catch((err) => console.log(err));
		}, 3600);
	};

	useEffect(() => {
		if (!user.username || user.username == '') {
			navigate('/login');
		}
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0, duration: 1.5 }}
			exit={{ opacity: 0 }}
			style={{ margin: 'auto', height: '100%' }}>
			<Container className='p-5 d-flex flex-column justify-content-center'>
				<Row className='p-3 d-flex flex-column justify-content-center'>
					<h1 className='display-2 text-center'>Create your own events</h1>
				</Row>
				<Form className='form p-4' onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formEventName'>
						<Form.Label>
							<h3>Name of the event</h3>
						</Form.Label>
						<Form.Control
							className='input mb-3 p-2'
							type='text'
							placeholder='Event name'
							name='eventName'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formDescription'>
						<Form.Label>
							<h3>Description</h3>
						</Form.Label>
						<Form.Control
							as='textarea'
							className='input mb-3 p-2'
							placeholder='Describe the event'
							name='description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Form.Group>

					<Form.Select
						className='mb-3 input'
						aria-label='Difficulty'
						onChange={(e) => setDifficulty(e.target.value)}>
						<option>Difficulty</option>
						<option value='1'>Easy</option>
						<option value='2'>Medium</option>
						<option value='3'>Hard</option>
					</Form.Select>

					<Form.Group controlId='formImageUpload' onChange={imageHandler}>
						<Form.Label>
							<h3>Add Images</h3>
						</Form.Label>
						<ImageUpload />
					</Form.Group>

					<Form.Group className='my-3' controlId='formEventDate'>
						<Form.Label>
							<h3>Select a Start Date</h3>
						</Form.Label>
						<Form.Control
							className='input'
							type='date'
							name='eventDate'
							value={date}
							onChange={(e) => setDate(e.target.value)}
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

			{/* MAP COMPONENT ------------------------- */}
			<div className='border'>
				<Map />
			</div>
		</motion.div>
	);
}
