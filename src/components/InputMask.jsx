import React, { useRef } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import "./css/inputMask.css";

function InputMask() {
  const [validated, setValidated] = useState(false);
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const [authorImage, setAuthorImage] = useState();
  const [authorImageURL, setAuthorImageURL] = useState();
  const [formData, setFormData] = useState({
    author: "",
    authorPic: "",
    title: "",
    text: "",
    imgURL: "",
  });

  const formRef = useRef(null);

  const handleChange = (event) => {
    console.log(event.target);
    const { id, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const newFormData = new FormData(formRef.current);
    console.log("state formData: ", formData);
    newFormData.append("author", formData.author);
    newFormData.append("text", formData.text);
    newFormData.append("title", formData.title);

    newFormData.append("authorPic", authorImage[0]);
    newFormData.append("imgURL", image[0]);
    // console.log(newFormData);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const post = await fetch("http://localhost:8000/posts/", {
      method: "POST",
      body: newFormData,
    });
    const newPost = await post.json();
    console.log(newPost);

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
        className='my-5'
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        onChange={handleChange}
        ref={formRef}
        encType="multipart/form-data"
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="This is a special post"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="author" name="author">
            <Form.Label>Author</Form.Label>
            <Form.Control required type="text" placeholder="Max Mustermann" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            className="d-flex flex-column justify-content-center"
            as={Col}
            md="6"
            controlId="authorPic"
            name="authorPic"
          >
            <Form.Label>Authorimage</Form.Label>
            <Form.Control type="file" onChange={handleAuthorImageChange} />
          </Form.Group>
          <Col>
            <img src={authorImageURL} alt="" className="author-image" />
          </Col>
        </Row>
        <Row>
          <img src="" alt="" />
        </Row>

        <Row className="mb-3">
          <Form.Group
            className="d-flex flex-column justify-content-center"
            as={Col}
            md="6"
            controlId="imgURL"
            name="imgURL"
            onChange={handleImageChange}
          >
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Col></Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            {imageURL ? (
<<<<<<< Updated upstream
              <img src={imageURL} alt='' className='blog-image' />
=======
              <img src={imageURL} alt="" className="blog-image}" />
>>>>>>> Stashed changes
            ) : (
              <></>
            )}
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="text" name="text">
            <Form.Label>Text</Form.Label>
            <Form.Control
<<<<<<< Updated upstream
              as='textarea'
              type='textarea'
              rows={10}
              placeholder='This is your post...'
=======
              as="textarea"
              type="textarea"
              rows={15}
              placeholder="This is your post..."
>>>>>>> Stashed changes
              required
            />
            <Form.Control.Feedback type="invalid">
              Please post something.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

<<<<<<< Updated upstream
        <Button className='mb-4' type='submit'>
          Submit Form
        </Button>
=======
        <Button type="submit">Submit Form</Button>
>>>>>>> Stashed changes
      </Form>
    </Container>
  );
}

export default InputMask;
