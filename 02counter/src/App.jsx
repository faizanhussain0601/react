import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(1)
//  let counter = 5
 const addValue = ()=>{
   counter = counter+1
   if(counter<=20){
   setCounter(counter)
   }    
  }

  const removeValue =()=>{
   counter = counter -1;
   if(counter>=0){
   setCounter(counter)
   }
  }

  return (
    <>
     <h1>Chai aur react </h1>
      <h3>Counter Value: {counter}</h3>  
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}> Remove Value : {counter}</button>
       <p>footer:{counter}</p>
    </>
  )
}

export default App
