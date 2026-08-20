import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./components/Card"

function App() {
let myObj ={
  username: "faizan",
  age:23
}

let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind Test</h1>
     <Card username="Faizan ali" btnText='Press Me' />
     <Card username="Hussain khan" btnText='Down me'/>
    </>
  )
}

export default App
