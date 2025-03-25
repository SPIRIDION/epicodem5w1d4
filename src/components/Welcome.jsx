import React from "react";
import { Container,Alert } from "react-bootstrap";

export default function Welcome() {
  return (
    <Container variant="primary" className="my-3">
      <Alert>WELCOME ON EPIBOOKS, here you'll find a wide range of books of all kinds...ENJOY IT!</Alert>
    </Container>
  )
}