import { useState } from 'react'
import './App.css'
import Bills from './Bills'
import Test from './test'
import Table from './Table'
import Data from './Accounts'
import RenderCalc from './RenderCalc'

function App() {
  const [count, setCount] = useState(0);
  function advanceCount(value){
    if(value === "one"){  
    setCount((c) => {return c + 1})}
   else if(value === "two"){
    setCount((c) => {return c + 2})}
    else if(value === "three"){
    setCount((c) => {return c + 3})}
     else if(value === "four"){
    setCount((c) => {return c + 4})}
     else if(value === "five"){
    setCount((c) => {return c + 5})}
     else if(value === "reset"){
    setCount(() => {return 0})}
  else{
    setCount((c) => {return c + 1})}
    
}
const Alpha = [
  'one', 'two', 'three', 'four', 'five', 'reset'
];


 

  return (
    <>
      {/* <Bills />
      <Test/>
      <Table object = {Data}/> */}
    {/* <div className='state' onClick={() => advanceCount()}>
    {count}
      
    <button className='advanceState'>Click To Advance The Count</button>
    
    </div> 
    <div className='ButtonContainer'>
    {Alpha.map((item) => (<button key={item} onClick={() => advanceCount(item)}> {item} </button>))}
</div> */}
<RenderCalc/>

    </>
)
}
export default App;
