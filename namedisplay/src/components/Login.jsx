import React from 'react'
import usercontext from '../context/usecontext'
import { useContext } from 'react'

const Login = () => {
    const [username,setUsername]=React.useState("")
    const {setText}=useContext(usercontext)
    const update =(e)=>{
        e.preventDefault()
        setText({username})
    }
  return (
    <>
        <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <button onClick={update}>Update</button>
       
    </>
  )
}

export default Login