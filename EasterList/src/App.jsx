import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>Main Dish</h3>
      <ul>
        <li>a Roast?</li>
        <li>carrots</li>
        <li>potatoes (baked or cooked with roast?)</li>
        <li>celery</li>
        <li>onion</li>
        <li>creamer</li>
        <li>🧡🧡🧡🧡🧡🧡🧡</li>
        <li>🍳</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  )
}

export default App
