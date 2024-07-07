import React from 'react'
import { useContext } from 'react'
import Usercontext from '../usecontext/context/context'

const Add = () => {
    const createcont=useContext(Usercontext)
  return (
    <div>
        <h1>{createcont}</h1>
    </div>
  )
}

export default Add