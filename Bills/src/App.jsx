import { useState } from 'react'
import './App.css'
import Table from './Table'
import Data from './Accounts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Table object = {Data}/>
    </>
  )
}

export default App
