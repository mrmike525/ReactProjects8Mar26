import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chakra from './Chakra'

function ClickMe(){console.log("I have been clicked!!");
  let x = document.querySelector('#optional');
   
  x.style.backgroundColor = "rgb(112, 253, 47)"
}

const colors = {Crown: "magenta", ThirdEye: "purple", Throat: "blue", Heart: "green", SolarPlexus: "yellow", Navel: "orange", Root: "red"};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <span style={{display: "flex", flexDirection: "column"}}>
    <Chakra color = {colors.Crown}/>
    <Chakra color = {colors.ThirdEye}/>
    <Chakra color = {colors.Throat}/>
    <Chakra color = {colors.Heart}/>
    <Chakra  id="optional" color = {colors.SolarPlexus}/>
    <Chakra color = {colors.Navel}/>
    <Chakra color = {colors.Root}>
      <button onClick={ClickMe}>Click ME!!</button>
      </Chakra>
     </span>
     <span>Help Me Please</span>
    </>
  )
}

export default App


