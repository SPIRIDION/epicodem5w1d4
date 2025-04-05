import { useEffect, useState } from "react";
import { Container,Col,Row } from "react-bootstrap";
import Fantasy from '../data/fantasy.json'
import SingleBook from "./SingleBook";

const AllTheBooks = ({ searchBooks }) => {
  
  // salviamo la tipologia di libri dentro uno stato
  const [filteredBooks, setFilteredBooks] = useState(Fantasy)
  // filteredBooks = setFilteredBooks(Fantasy.filter((b) => b.title.toLowerCase().includes(searchBooks)))
  useEffect(() => {
    const books = Fantasy.filter((b) => b.title.toLowerCase().includes(searchBooks))
    setFilteredBooks(books)
  }, [searchBooks])

  return (
    <Container>
      <Row className="my-5">
        <Col>
          
        </Col>
      </Row>
      <Row className="g-2">
        {filteredBooks.map((book) => {
          return (
            <Col className="col-6 col-md-4 col-lg-3" key={book.asin}>
              <SingleBook book = {book} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default AllTheBooks

