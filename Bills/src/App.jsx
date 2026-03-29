import { useState } from 'react'
import './App.css'
import Table from './Table'
import Data from './Accounts'

function App() {
  const [count, setCount] = useState(0)
  const advanceCount = () => setCount((c) => {return c + 1})
const Alpha = [
  'one', 'two', 'three', 'four', 'five'
]
  return (
    <>
      <Table object = {Data}/>
      <div className='state' onClick={() => advanceCount()}>
        {count}
      
      <button className='advanceState'>Click To Advance The Count</button>
    
    </div>
    {Alpha.map((item, idx)=> (<button key={item}>{item}</button>
    ))}   

    </>
  )
}

export default App
