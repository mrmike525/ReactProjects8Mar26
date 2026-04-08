import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='header' style={{border: "2px solid red"}}>
      <a href="">home</a>
      <a href="">Get him to the Greek!</a>
      <a href="">Let's Taco BOUT IT</a>
     </div>
    </>
  )
}

export default App
