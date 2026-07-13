import { useState } from 'react'
import './App.css'
import Stars from './Stars'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='addOneDiv'>
      {count}
        <button className='addOneButton' onClick={() => setCount((c) => c + 1)}>AddOne</button>
         <button className='subOneButton' onClick={() => setCount((c) => c - 1)}>SubOne</button>
      </div> */}
      <Stars/>
      </>
  )
}

export default App
