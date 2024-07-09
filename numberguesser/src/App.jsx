import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [text, setText]= useState("")
  const guess=(e)=>{
    e.preventDefault()
    const correct = Math.trunc(Math.random()*20);
    console.log(correct);
    if(correct==number){
      setText("Gussed Correctly")
    }
    else if(correct<number){
      setText("Number Guessed is Greater")
    }
    else{
      setText("Guessed Number is Smaller")
    }
    
  }
  return (
    <>
      <div>
        <input placeholder='Guess the number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button  onClick={guess}>Guess the number</button>
        <h3>{text}</h3>
      </div>
    </>
  )
}

export default App
