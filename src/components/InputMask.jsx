import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import './css/inputMask.css';

function InputMask() {
  const [validated, setValidated] = useState(false);
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const [authorImage, setAuthorImage] = useState();
  const [authorImageURL, setAuthorImageURL] = useState();
  const [formData, setFormData] = useState({
    author: '',
    authorPic: '',
    title: '',
    text: '',
    imgURL: '',
  });

  const handleChange = (event) => {
    console.log(event.target);
    const { id, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleAuthorImageChange = (event) => {
    console.log(event.target.files[0]);
    setAuthorImage(event.target.files);
    setAuthorImageURL(URL.createObjectURL(event.target.files[0]));
  };

  const handleImageChange = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files);
    setImageURL(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <Container>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <Row className='mb-3'>
          <Form.Group as={Col} md='4' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='This is a special post'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md='4' controlId='author'>
            <Form.Label>Author</Form.Label>
            <Form.Control required type='text' placeholder='Max Mustermann' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group
            className='d-flex flex-column justify-content-center'
            as={Col}
            md='6'
            controlId='authorPic'
          >
            <Form.Label>Authorimage</Form.Label>
            <Form.Control type='file' onChange={handleAuthorImageChange} />
          </Form.Group>
          <Col>
            <img src={authorImageURL} alt='' className='author-image' />
          </Col>
        </Row>
        <Row>
          <img src='' alt='' />
        </Row>

        <Row className='mb-3'>
          <Form.Group
            className='d-flex flex-column justify-content-center'
            as={Col}
            md='6'
            controlId='imgURL'
            onChange={handleImageChange}
          >
            <Form.Label>Image</Form.Label>
            <Form.Control type='file' />
          </Form.Group>

          <Col></Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col md={6}>
            {imageURL ? (
              <img src={imageURL} alt='' className='blog-image}' />
            ) : (
              <></>
            )}
          </Col>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='text'>
            <Form.Label>Text</Form.Label>
            <Form.Control
              as='textarea'
              type='textarea'
              rows={15}
              placeholder='This is your post...'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please post something.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type='submit'>Submit Form</Button>
      </Form>
    </Container>
  );
}

export default InputMask;
