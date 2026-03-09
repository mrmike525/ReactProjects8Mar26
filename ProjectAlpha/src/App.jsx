import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



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
      <ul>
        
        <li id="taco"> <span style={{backgroundColor: "black", fontSize: "50px"}}> <input id="one" type="checkbox" onClick={changeColor}  /> Taco Bout it</span></li>
      </ul>
    </>
  )
}

export default App


{/* <h3 style={{ color: quantity <= 5 ? "hsla(14, 78%, 55%, 1.00)" : "black" }} */}