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
      <p>HELP ME! SOMEBODY HELP ME PLEASE!!! mucho</p>
      <Chakra color={colors} value= "crown"/>
    </>
  )
}

export default App
