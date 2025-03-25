import React from "react";
import {Container} from 'react-bootstrap';
import { CCircle } from "react-bootstrap-icons";

export default function MyFooter() {
  return(
    <Container fluid className="d-flex justify-content-center align-items-center py-1 bg-body-secondary fixed-bottom">
      <p className="m-0">EPIBOOKS 2025</p>
      <p className="m-0 ms-2">All rights reserved</p>
      <CCircle className="mx-2" size={20} color="black"/>
    </Container>
  )
}