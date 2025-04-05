import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentList = ({ comments, asin }) => (

  <>
    <ListGroup className="mt-3">
    {comments.map((comment) => (
      <SingleComment comment={comment} key={comment._id} asin={asin}/>
    ))}
  </ListGroup>
  </>
)

export default CommentList