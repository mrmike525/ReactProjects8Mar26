import { useState } from 'react'
import './App.css'
import Bills from './Bills'
import Test from './test'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bills />
      <Test/>
      
    </>
  )
}

export default App
