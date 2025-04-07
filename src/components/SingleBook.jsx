import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleBook = ({ book, selected, setSelected }) => {

  const navigate = useNavigate()

  return (
    <>
      <Card 
        onClick={() => setSelected(book.asin)}
        style={{border: selected === book.asin ? '2px solid red' : '1px solid black'}}
        data-testid="card"
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Price: {book.price} $</Card.Text>
          <button className="btn btn-warning w-100" onClick={() => navigate(`/details/${book.asin}`)}>Details</button>
        </Card.Body> 
      </Card>
    </>
  )
}

export default SingleBook