import './App.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home  from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'

  const router = createBrowserRouter([
    {
      path: '/', element : <Layout/>,
      children : [
        {index : true , element : <Home/>},
        {path : 'contact', element : <Contact/>},
        {path : 'about', element : <About/>},
        {path : 'user/:id', element : <User/>},  
        {path : '*', element : <h1>404 Page Not Found</h1>},
      ]
    }
    
  ])

function App() {
  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
