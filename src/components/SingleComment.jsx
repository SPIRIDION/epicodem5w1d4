import { useState, useEffect } from "react"
import { ListGroup, Form, Button } from "react-bootstrap"

const SingleComment = ({ comment, asin }) => {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGYwMjFlMTQwNjAwMTUzMTRkNzEiLCJpYXQiOjE3NDM2MjU5MDcsImV4cCI6MTc0NDgzNTUwN30.KG8OSTEKKOQqb3kqjIONOghr9S87QXELpuOPaQ7LQeI'

  const [hidden, setHidden] = useState(true)
  const [textUpdateComment, setTextUpdateComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })
  const [updateHidden, setUpdateHidden] = useState(true)

  useEffect(() => {
      setTextUpdateComment((c) => ({
        ...c,
        elementId: asin,
      }))
    }, [asin])

  const deleteComment = async (asin) => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
      if (response.ok) {
        alert('Comment deleted!')
      } else {
        throw new Error('Comment NOT deleted!')
      }
    }
    catch(error) {
      console.log(error)
    }
  }

  const updateComment = async () => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
        method: 'PUT', 
        body: JSON.stringify(textUpdateComment), 
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type':'application/json'
        }
      })
      if (response.ok) {
        alert('Comment updated!')
        setTextUpdateComment({
          comment: '',
          rate: 1,
          elementId: null
        })
      } else {
        throw new Error('Comment NOT updated!')
      }
    } 
    catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <ListGroup.Item onClick={() => setHidden(!hidden)} className="btn mt-1 btn-outline-primary">
        {comment.comment}
      </ListGroup.Item>
      <div className={`d-flex my-3 ${hidden ? 'd-none' : ''}`}>
        <button className={"btn btn-primary me-2"} onClick={() => setUpdateHidden(!updateHidden)}>Update comment</button>
        <button className={"btn btn-danger"} onClick={() => deleteComment(comment._id)}>Delete comment</button>
      </div>
      <div className={`my-3 ${updateHidden ? 'd-none' : ''}`}>
        <Form>
          <Form.Group>
            <Form.Label className="fw-bold my-3">Update Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write a comment..."
              value={textUpdateComment.comment}
              onChange={(e) => setTextUpdateComment({
                ...textUpdateComment,
                comment: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mt-3">Select your rate form 1 to 5</Form.Label>
            <Form.Control
              as="select"
              value={textUpdateComment.rate}
              onChange={(e) => setTextUpdateComment({
                ...textUpdateComment,
                rate: e.target.value
              })}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button className="btn btn-info w-100 my-3" type="button" onClick={updateComment}>
            Update Comment
          </Button>
        </Form>
      </div>
      
    </>
  )
}

export default SingleComment