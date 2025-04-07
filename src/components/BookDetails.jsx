import { useParams } from "react-router-dom"
import { Col, Row, Card, Container } from "react-bootstrap"
import CommentArea from "./CommentArea"
import Fantasy from '../data/fantasy.json'

const BookDetails = () => {

  const params = useParams()
  const bookInfo = Fantasy.find((book) => 
    book.asin === params.asin)

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center mb-5">
          <Col className="col-12 col-md-8">
            <Card>
              <Card.Img variant="top" src={bookInfo.img} />
              <Card.Body>
                <Card.Title className="fw-bold">
                  {bookInfo.title}
                </Card.Title>
              </Card.Body>
            </Card>
            <CommentArea asin={params.asin} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BookDetails