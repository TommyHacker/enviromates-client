import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function ImageUpload() {
  const [images, setImages] = useState([]);
  const maxNumber = 2;

  function handleImages(imageList, addUpdateIndex){
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Container>
      <ImageUploading
        multiple
        value={images}
        onChange={handleImages}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
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
          <Row className="upload__image-wrapper">
            <Col className='mb-2'>
              <Button
                className='navBtn'
                style={isDragging ? { color: '#BED080' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </Button>
            </Col>
            <Col>                
              <Button className='navBtn' onClick={onImageRemoveAll} >Remove all images</Button>
            </Col>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Image src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <Button className='navBtn' onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button className='navBtn' onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </Row>
        )}
      </ImageUploading>
    </Container>
  );
}
