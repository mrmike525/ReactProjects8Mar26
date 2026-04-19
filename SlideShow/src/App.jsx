import { useState } from 'react'
import SlideShow from './SlideShow'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const colors = ["orange", "blue", "red", "yellow"];
  const [color, setColor] = useState("red");
  
  return (
    <>
      <span className='headlinerContainer'>
      <h1 className='headliner' onClick={()=>(style={color: colors[0]})}>Introducing the Family!</h1>
      </span>
        <SlideShow />
      <div className='spanContainer'>
        <span className='a' />
        <span className='b' />
      </div>
    </>
  )
}

export default App
