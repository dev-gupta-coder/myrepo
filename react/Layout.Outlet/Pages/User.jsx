import { useParams } from 'react-router-dom'

function User() {

  // Extract parameter from URL
  const { id } = useParams()

  return <h1>👤 User ID: {id}</h1>
}

export default User
