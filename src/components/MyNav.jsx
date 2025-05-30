import React from "react";
import {Navbar, Container, Nav, Form } from 'react-bootstrap';

export default function MyNav({ searchBooks, setSearchBooks}) {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#">EPIBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form.Group>
            <Form.Control 
              type="search"
              placeholder="Search for books..."
              value={searchBooks}
              onChange={(e) => setSearchBooks(e.target.value)}
            />
          </Form.Group>
      </Container>
    </Navbar>
  )
}