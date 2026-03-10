import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chakra from './Chakra'

const colors = {Crown: "magenta", ThirdEye: "purple", Throat: "blue", Heart: "green", SolarPlexus: "yellow", Navel: "orange", Root: "red"};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display: "flex", flexDirection: "column"}}>
    <Chakra color = {colors.Crown}/>
    <Chakra color = {colors.ThirdEye}/>
    <Chakra color = {colors.Throat}/>
    <Chakra color = {colors.Heart}/>
    <Chakra color = {colors.SolarPlexus}/>
    <Chakra color = {colors.Navel}/>
    <Chakra color = {colors.Root}/>
     </div>
    </>
  )
}

export default App


