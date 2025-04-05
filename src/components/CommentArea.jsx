import { useEffect, useState } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Error from './Error'
import Loading from "./Loading"

const CommentArea = ({ asin }) => {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGYwMjFlMTQwNjAwMTUzMTRkNzEiLCJpYXQiOjE3NDM2MjU5MDcsImV4cCI6MTc0NDgzNTUwN30.KG8OSTEKKOQqb3kqjIONOghr9S87QXELpuOPaQ7LQeI'

  const [comments, setComments] = useState([])
  const [errorMessage, setErrorMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
          }
        });
        if (response.ok) {
          const data = await response.json()
          setComments(data)
          setLoading(false)
          setErrorMessage(false)
        } else {
          console.log('error')
          setLoading(true)
          setErrorMessage(true)
        }
      }
      catch(error) {
        console.log(error)
        setLoading(false)
        setErrorMessage(true)
      }
    }
    if (asin) {
      getComments()
    }
  }, [asin])

  return (
    <>
      <div>
        {loading && <Loading />}
        {errorMessage && <Error />}
        <CommentList comments={comments} asin={asin}/>
        <AddComment asin={asin} />
      </div>
    </>
  )
}

export default CommentArea