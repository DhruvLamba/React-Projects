import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Usercontext from './usecontext/context/context'
import Add from './components/add'



function App() {
  const [count, setCount] = useState(0)
  const add=()=>{
    setCount(count+1)
  }

  return (
    <>
      <Usercontext.Provider value={count}>      
        <Form/>        
      </Usercontext.Provider>
      <button onClick={add}>
        Add
      </button>

    </>
  )
}

export default App
