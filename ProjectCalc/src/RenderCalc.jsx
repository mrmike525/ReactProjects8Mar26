import './RenderCalc.css'
import { useState } from 'react'
function RenderCalc({nums, operation, add, subtract, multiply, divide, del}){
const [result, setResult] = useState(0);
//  console.log(nums)
// console.log(add)
    return (
        <>
        <div className='result'>{result}</div>
        <span className="buttonContainer">
        {nums.map(function(item){return <button className="RenderCalc" key={item} onClick={()=> setResult((r) => (add(r, item)))}> {item} </button>})}
        {operation.map((item)=>(<button key={item}  className='RenderOperation' onClick={()=>setResult(() => (del(item)))}>{item}</button>))}
    </span>
    </>
    )
}
export default RenderCalc