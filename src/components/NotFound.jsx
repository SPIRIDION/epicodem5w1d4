import { Container, Row, Col, Alert } from "react-bootstrap"

const NotFound = () => {

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-12 col-md-8">
            <Alert variant="danger">Page Not Found!</Alert>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound