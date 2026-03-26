import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const advanceCount = () => setCount((c) => {return c + 1})
const Alpha = [
  'one', 'two', 'three', 'four', 'five'
]
  return (
    <>
      <div className='state' onClick={() => advanceCount()}>
        {count}
      
      <button className='advanceState'>Click To Advance The Count</button>
    
    </div>
    {/* {Alpha.map((item, idx)=> (<button key={item}>{item}</button>
    ))}   */}

    </>
  )
}

export default App
