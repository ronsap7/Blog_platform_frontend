import react from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';




export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home" ><h1>CROSSOVER&nbsp;BLOG</h1></Navbar.Brand> */}
          <Nav className="me-auto">
          <NavLink to="/">
              <div className="m-5">Home</div>
            </NavLink>

            <NavLink to="/create">
              <div className="m-5">Create</div>
            </NavLink>

            <NavLink to="/blogs">
              <div className="m-5">my&nbsp;Posts</div>
            </NavLink>
          </Nav>
          {/* <InputGroup size="sm" className="mb-3">
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
                        <InputGroup.Text id="inputGroup-sizing-sm">search</InputGroup.Text>

          </InputGroup> */}
        </Container>
      </Navbar>
    </>
  );
}