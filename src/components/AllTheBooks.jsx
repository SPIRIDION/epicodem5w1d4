import { useEffect, useState } from "react";
import { Container,Col,Row,Form } from "react-bootstrap";
import Fantasy from '../data/fantasy.json'
import SingleBook from "./SingleBook";

const AllTheBooks = () => {
  // ricerca dei libri da parte dell'utente
  const [searchBooks, setSearchBooks] = useState('')
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
          <Form.Group>
            <Form.Label className="fw-bold">Search for books</Form.Label>
            <Form.Control 
              type="search"
              placeholder="Search..."
              value={searchBooks}
              onChange={(e) => setSearchBooks(e.target.value)}
            />
          </Form.Group>
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

