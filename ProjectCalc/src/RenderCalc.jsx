import './RenderCalc.css'

function RenderCalc({nums, operation, del, setResult, result, setOperator, operator, multiFunc}){

    return (
        <>
            <div className='result'>{result}</div>
            <div className='operator'>{operator}</div>
        <span className="buttonContainer">
        {nums.map(function(item){return <button className="RenderCalc" key={item} onClick={()=> setResult((r) => (multiFunc(r, item)))}> {item} </button>})}
        {operation.map((item)=>(<button key={item}  className='RenderOperation' onClick={()=>setOperator(() => (del(item)))}>{item}</button>))}
        
    </span>
    </>
    )
}
export default RenderCalc