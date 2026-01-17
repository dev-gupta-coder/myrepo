import { useState } from 'react'
import BgButton from './bgButton.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color , setColor] = useState('bg-black')

  function Bg(color){
    setColor(color)

  }

  return (
    <>
      
<div className={`card h-screen rounded flex items-center justify-center flex-col ${color}`}>
        <button 
         className='bg-purple-300 hover:bg-violet-500 text-black font-bold py-2 px-4 rounded-3xl mb-5 ' onClick={() => setCount((count) => count + 1) }>
          count is {count}
        </button>

        <div>
          <BgButton changeBg={Bg}/>  
        </div>

      </div>

    </>
  )
}

export default App
