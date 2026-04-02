import { useState } from 'react'
import './App.css'
import BigAdd from './BigAdd'
function App() {
 

  return (
    <>
      <BigAdd/>
      <BigAdd value1={50} value2={70}/>
    </>
  )
}

export default App
