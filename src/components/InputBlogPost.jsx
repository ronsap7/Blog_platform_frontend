import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

function InputBlogPost() {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    author: '',
    authorPic: '',
    title: '',
    text: '',
    imgURL: '',
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} md='4' controlId='validationCustom01'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='This is a special post'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md='4' controlId='validationCustom02'>
            <Form.Label>Author</Form.Label>
            <Form.Control required type='text' placeholder='Max Mustermann' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='formFile'>
            <Form.Label>Authorimage</Form.Label>
            <Form.Control type='file' />
          </Form.Group>
        </Row>
        <Row>
          <img src='' alt='' />
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='formFile'>
            <Form.Label>Image</Form.Label>
            <Form.Control type='file' />
          </Form.Group>
        </Row>
        <Row>
          <img src='' alt='' />
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} md='6' controlId='validationCustom03'>
            <Form.Label>Text</Form.Label>
            <Form.Control
              type='textarea'
              placeholder='This is your post...'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please post something.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type='submit'>Submit form</Button>
      </Form>
    </Container>
  );
}

export default InputBlogPost;
