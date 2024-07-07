import React from 'react'
import usercontext from './usecontext'
const UsercontextProvider=({children})=>{
    const [text,setText]=React.useState(null)
    return(
        <usercontext.Provider value={{text,setText}}>
            {children}
        </usercontext.Provider>
    )
}
export default UsercontextProvider