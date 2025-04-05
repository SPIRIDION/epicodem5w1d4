import { Button, Form } from "react-bootstrap"
import { useState, useEffect } from "react"

const AddComment = ({ asin }) => {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGYwMjFlMTQwNjAwMTUzMTRkNzEiLCJpYXQiOjE3NDM2MjU5MDcsImV4cCI6MTc0NDgzNTUwN30.KG8OSTEKKOQqb3kqjIONOghr9S87QXELpuOPaQ7LQeI'

  // creiamo lo stato iniziale della recensione e il metodo per modificarla
  const [textComment, setTextComment] = useState({
    comment: '',
    rate: 1,
    elementId: null
  })

  // aggiorniamo lo stato di textComment ogni volta che cambia asin e aggiungiamo asin a elementId
  useEffect(() => {
    setTextComment((c) => ({
      ...c,
      elementId: asin,
    }))
  }, [asin])

  // creiamo la funzione asincrona per poter inviare(POST) la recensione all'API
  const sendComment = async function () {

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        body: JSON.stringify(textComment),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type':'application/json'
        }
      });
      if (response.ok) {
        alert('Comment sent!')
        // dopo l'invio della recensione resettiamo lo stato di textComment alle condizioni iniziali
        setTextComment({
          comment: '',
          rate: 1,
          elementId: null
        })
      } else {
        throw new Error('Something went wrong!')
      }
    }
    catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label className="fw-bold my-3">Add Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write a comment..."
            value={textComment.comment}
            onChange={(e) => setTextComment({
              ...textComment,
              comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">Select your rate form 1 to 5</Form.Label>
          <Form.Control
            as="select"
            value={textComment.rate}
            onChange={(e) => setTextComment({
              ...textComment,
              rate: e.target.value,
            })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button className="btn btn-success w-100 my-3" type="button" onClick={sendComment}>
          Send
        </Button>
      </Form>
    </>
  )
}

export default AddComment