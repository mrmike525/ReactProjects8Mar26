import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Practice from './State'
import ButtonGroup from './ButtonGroup'
import Counter from './counter'
import NumberGame from './NumberGame'
import NumbersList from './NumbersList'
function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('red')
  return (
    <>
    <NumbersList/>
    {/* <div id='container'>
    <div id='countState'>{count}</div>
    <div id='buttonContainer'>
      <button id='addOne'
      onClick={()=>(setCount(count + 1))}>AddOne</button>
      <button id='reset' 
      onClick={()=>(setCount(0))}>Reset</button>
      <button id='addTen'
      onClick={()=>(setCount(count + 10))}>AddTen</button>
      <button id='random'
      onClick={()=>{
        for(let x = 0; x < 10; x++){
        setTimeout(()=>{
          setCount(count => count + 12);
        }, 2000 * x); 
        console.log(x)
        }}}>AddTwelve * 10</button>
        
        
    </div>
    <ButtonGroup className = "ButtonGroup"/>
    </div>
    <Counter/> */}
    {/* <NumberGame/> */}
    {/* <NumberGame/> */}
    {/* <NumberGame/> */}
    {/*<NumberGame/> */}

    </>
  )
}

export default App
