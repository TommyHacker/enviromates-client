import React, { useEffect, useState } from 'react';
const url = 'https://api.cloudinary.com/v1_1/dgoun8ulz/image/upload';
import { Container, Form, Button } from 'react-bootstrap';
import ImageUpload from '../ImageUpload';

const CompleteEvent = ({ event }) => {
	const date = new Date();
	const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	const [currentDate, setCurrentDate] = useState(formattedDate);
	const [image, setImage] = useState();
	const imageHandler = (e) => {
		setImage(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		// prepare form data for cloudinary post request
		formData.append('file', image);
		formData.append('upload_preset', 'my-uploads');

		// post to cloudinary
		const imageData = await fetch(url, { body: formData, method: 'POST' })
			.then((response) => response.json())
			.catch((err) => console.log(err));
		imageData.secure_url;

		// append user access token to prove they are the author of this event
		const accesstoken = window.localStorage.getItem('accesstoken');
		formData.append('accesstoken', accesstoken);

		// append cloudinary link to store in event database
		formData.append('img-after', imageData.secure_url);
		// append finish date of event
		formData.append('end-date', currentDate);
		formData.append('event-id', event.id);

		const options = {
			method: 'PATCH',
			mode: 'cors',
			body: formData,
		};

		// edit the event to set Ended date and After image
		// fetch(`https://enviromates.herokuapp.com/events/${event.id}`, options)
		fetch(`https://enviromates.herokuapp.com/events/${event.id}`, options)
			.then((response) => response.json())
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='formImageUpload' onChange={imageHandler}>
					<ImageUpload />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Close Event
				</Button>
			</Form>
		</Container>
	);
};

export default CompleteEvent;
