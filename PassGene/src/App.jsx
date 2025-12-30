import { useState } from 'react'

import './App.css'

function App() {
  const [length , setLength] = useState(10)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [symbolAllowed , setSymbolAllowed] = useState(false)
  const [password , setPassword] = useState('')

 

function generatePassword() {
   const str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers="0123456789"
  const symbols="!@#$%^&*()_+~`|}{[]:;?><,./-="
  let characterPool = str

  if (numberAllowed) {
    characterPool += numbers
  }

  if (symbolAllowed) {
    characterPool += symbols
  }

  let generatedPassword = ""

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length)
    generatedPassword += characterPool.charAt(randomIndex)
  }

  setPassword(generatedPassword)
}




  

  return (
    <div className="App flex flex-col items-center justify-center h-screen bg-neutral-800
    text-white text-xl font-bold space-y-5">
      <h1>Hello World!</h1>
      <h1 className=''>Password Generator</h1>
      <input type="text" 
        value={password}
      readOnly placeholder='Hii there'
      
      className='bg-neutral-700 text-center text-white w-64 py-2 rounded-md mb-5'/>
      <div>
        <input type="range" min="3" max="20" value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="w-64 accent-purple-500"/>
        <label className='length gap-3 '>Length {length}</label>
      <button 
      onClick={generatePassword}
         className='bg-purple-300 hover:bg-violet-500 text-black font-bold py-2 px-4 rounded-3xl mb-5 ' >
          Generate Password
      </button>
      </div>
      
      <div>
        <label className='mr-3'>
          <input type="checkbox" 
          checked={numberAllowed}
          onChange={(e) => setNumberAllowed(e.target.checked)}
          />
          Include Numbers
        </label>
        <label>
          <input type="checkbox" 
          checked={symbolAllowed}
          onChange={(e) => setSymbolAllowed(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      <p className='text-sm'>Password will be displayed in placeholder</p>      

    </div>
  )
}



export default App
