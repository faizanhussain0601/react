import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserContextProvder from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {

  return (
    <UserContextProvder>
      <div className='h-screen flex flex-col justify-center items-center bg-gray-600'>
      <Login/>
      <Profile/>
      </div>
    </UserContextProvder>
  )
}

export default App
