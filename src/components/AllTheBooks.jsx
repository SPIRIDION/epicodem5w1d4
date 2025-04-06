import { useEffect, useState } from "react";
import { Container,Col,Row } from "react-bootstrap";
import Fantasy from '../data/fantasy.json'
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const AllTheBooks = ({ searchBooks }) => {
  
  // salviamo la tipologia di libri dentro uno stato
  const [filteredBooks, setFilteredBooks] = useState(Fantasy)
  const [selected, setSelected] = useState(false)
  
  useEffect(() => {
    const books = Fantasy.filter((b) => b.title.toLowerCase().includes(searchBooks))
    setFilteredBooks(books)
  }, [searchBooks])

  return (
    <Container>
      <Row>
        <Col className="col-6 col-md-8">
          <Row className="g-2">
            {filteredBooks.map((book) => {
              return (
                <Col className="col-12 col-md-6 col-lg-4" key={book.asin}>
                  <SingleBook book={book} selected={selected} setSelected={setSelected} />
                </Col>
              )
            })}
          </Row>  
        </Col>
        <Col className="col-6 col-md-4">
          <CommentArea asin={selected}/>
        </Col>
      </Row>
    </Container>
  )
}

export default AllTheBooks

