import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chakra from './Chakra'

const colors = {Crown: "magenta", ThirdEye: "purple", Throat: "blue", Heart: "green", SolarPlexus: "yellow", Navel: "orange", Root: "red"};



function changeColor(){
  const one = document.getElementById('one');
  const taco = document.getElementById('taco');
  if(one.checked == false){
    taco.style.color = "blue";
  } else {
    taco.style.color = "yellow";
  }
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <ul>
        
        <li id="taco"> <span style={{backgroundColor: "black", fontSize: "50px"}}> <input id="one" type="checkbox" onClick={changeColor}  /> Taco Bout it</span></li>
      </ul>
=======
      <p>HELP ME! SOMEBODY HELP ME PLEASE!!! mucho</p>
      <Chakra color={colors} value= "crown"/>
>>>>>>> f2c2a108c918a43843a543ad1e74fca48ba91089
    </>
  )
}

export default App


{/* <h3 style={{ color: quantity <= 5 ? "hsla(14, 78%, 55%, 1.00)" : "black" }} */}