import { useNavigate } from 'react-router-dom'

function Contact() {

  // useNavigate allows programmatic navigation
  const navigate = useNavigate()

  return (
    <>
      <h1>📞 Contact Page</h1>

      {/* Navigate using code */}
      <button onClick={() => navigate('/')}>
        Go to Home
      </button>
    </>
  )
}

export default Contact
