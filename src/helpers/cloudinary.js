const url = 'https://api.cloudinary.com/v1_1/dgoun8ulz/image/upload';

export const ImageUploader = async (image) => {
	const formData = new FormData();
	formData.append('file', image);
	formData.append('upload_preset', 'my-uploads');

	const data = await fetch(url, {
		method: 'POST',
		body: formData,
	})
		.then((response) => response.json())
		.catch((err) => console.log(err));

	console.log(data);
	console.log(formData.getAll('file'));
};
