import './RenderCalc.css'
import { useState } from 'react'
function RenderCalc({nums, operation}){
const [result, setResult] = useState(0);
//  console.log(nums)
    return (
        <>
        <div className='result'>{result}</div>
        <span className="buttonContainer">
        {nums.map(function(item){return <button className="RenderCalc" key={item} onClick={()=> setResult((r)=>{return r + item})}> {item} </button>})}
    </span>
    </>
    )
}
export default RenderCalc