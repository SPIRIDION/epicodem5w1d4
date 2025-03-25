import React from "react";
import { Container,Col,Row,Card } from "react-bootstrap";
import Fantasy from '../fantasy.json'

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="g-2">
        {Fantasy.map((book) => {
          return (
            <Col className="col-6 col-md-4 col-lg-3" key={book.asin}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body> 
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default AllTheBooks

