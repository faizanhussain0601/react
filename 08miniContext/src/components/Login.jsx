import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div className=' flex justify-center items-center'>
        <div className='flex flex-col gap-4 border-2 black p-5'>
        <h2 className='text-center'>Login</h2>
        <input type='text' 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='username' className='border-black-2px'/>
    
        <input type='text'
         value={password}
         onChange={(e)=> setPassword(e.target.value)}
         placeholder='password'/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  )
}

export default Login