import { useContext } from "react";
import usercontext from "../context/usecontext";
import React from 'react'

function Profile(){
    const {text}=useContext(usercontext)  
    if (!text) {
      return <h1>Please Enter Text</h1>
    }
     return <div><h1>{text.username}</h1></div>
   
  
}

export default Profile