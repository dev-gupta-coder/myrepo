import { useNavigate } from 'react-router-dom'

function Contact() {

  // useNavigate allows JS-based navigation
  const navigate = useNavigate()

  return (
    <>
      <h1>📞 Contact Page</h1>

      {/* Navigate programmatically */}
      <button onClick={() => navigate('/')}>
        Go to Home
      </button>
    </>
  )
}

export default Contact
