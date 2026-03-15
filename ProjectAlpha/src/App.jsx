import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chakra from './Chakra'
import { changeColor } from './changeColor'
const colors = {Crown: "magenta", ThirdEye: "purple", Throat: "blue", Heart: "green", SolarPlexus: "yellow", Navel: "orange", Root: "red"};

let value1 = false

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display: "flex", flexDirection: "column"}}>
    <Chakra color = {colors.Crown}/>
    <Chakra color = {colors.ThirdEye}/>
    <Chakra color = {colors.Throat}/>
    <Chakra color = {colors.Heart}>
      <span>Well this is the way! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim culpa quidem, molestias commodi quae non, corrupti ex nulla delectus placeat eaque magnam! Pariatur facilis rerum quis fuga beatae, architecto vel?</span>
      <p>help</p>
      <button onClick={value1 = true} style={{color: value1 === true ? "green": "red"}}>Change Color </button>
      </Chakra>
    <Chakra color = {colors.SolarPlexus}/>
    <Chakra color = {colors.Navel}/>
    <Chakra color = {colors.Root}/>
     </div>
     <p>help</p>
    </>
  )
}

export default App


