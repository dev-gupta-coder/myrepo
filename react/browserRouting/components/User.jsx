import { useParams } from 'react-router-dom'

function User() {

  // Get URL parameter
  const { id } = useParams()

  return <h1>👤 User ID: {id}</h1>
}

export default User
