import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)
  // let counter = 0;         
const addvalue = () =>{
  setCount( counter += 1);
  console.log(counter);
}
const removeValue = () =>{
  if(counter<=0){
    return;
  }
  setCount(counter -= 1) 
  console.log(counter);
}

  return (
    <>
      <h1>Chai aur code</h1>
      <p>Count is: {counter}</p>
      <button
      onClick={addvalue}>Increase </button>
      <br/>
      <button
      onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
