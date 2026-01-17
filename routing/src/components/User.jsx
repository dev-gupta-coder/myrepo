import { useParams } from 'react-router-dom'

function User() {
  const { id } = useParams()   // 👈 read URL parameter

  return (
    <h1 className="text-2xl font-bold">
      User: {id}
    </h1>
  )
}

export default User
