import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function ImageUpload() {
	const [images, setImages] = useState([]);
	const maxNumber = 1;

	function handleImages(imageList, addUpdateIndex) {
		// console.log(imageList, addUpdateIndex);
		setImages(imageList);
	}

	return (
		<Container>
			<ImageUploading
				multiple
				value={images}
				onChange={handleImages}
				maxNumber={maxNumber}
				dataURLKey='data_url'>
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					// write your building UI
					<Row className='upload__image-wrapper'>
						<Col className='mb-4'>
							<button
								className='navBtn'
								style={isDragging ? { color: '#BED080' } : undefined}
								onClick={onImageUpload}
								{...dragProps}>
								Click or Drop here
							</button>
						</Col>

						{imageList.map((image, index) => (
							<div key={index} className='image-item'>
								<Image
									src={image['data_url']}
									alt=''
									width='100'
									className='mx-4'
								/>
								<div className='mt-2 image-item__btn-wrapper'>
									<button
										className='navBtn mt-3 me-3'
										onClick={() => onImageUpdate(index)}>
										Update Image
									</button>
									<button
										className='navBtn'
										onClick={() => onImageRemove(index)}>
										Remove Image
									</button>
								</div>
							</div>
						))}
					</Row>
				)}
			</ImageUploading>
		</Container>
	);
}
