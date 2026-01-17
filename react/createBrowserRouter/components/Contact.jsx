import { useNavigate } from 'react-router-dom'

function Contact() {

  // useNavigate allows navigation via JS
  const navigate = useNavigate()

  return (
    <>
      <h1>📞 Contact Page</h1>

      {/* Navigate when button is clicked */}
      <button onClick={() => navigate('/')}>
        Go to Home
      </button>
    </>
  )
}

export default Contact
