import { useState } from 'preact/hooks'
import BgButton from '../../my-react-app/src/bgButton' 
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div class="card">
        <button className="bg-black rounded" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <br />
      <BgButton />


    </>
  )
}
