import { Card } from "react-bootstrap";

const SingleBook = ({ book, selected, setSelected }) => {

  return (
    <>
      <Card 
        onClick={() => setSelected(book.asin)}
        style={{border: selected === book.asin ? '2px solid red' : '1px solid black'}}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Price: {book.price} $</Card.Text>
        </Card.Body> 
      </Card>
    </>
  )
}

export default SingleBook