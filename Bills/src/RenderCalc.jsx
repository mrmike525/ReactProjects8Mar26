import "./RenderCalc.css"
import { useState } from "react";

function RenderCalc({result}){
    const calcData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operAnd = [ "🟰", "➕", "➖", "✖️", "➗", "DEL"];
    const [calc, setCalc] = useState(0);
    const copyOperAnd = [...operAnd];
    console.log(result)
    console.log(copyOperAnd)
    return (
        <>
        <div className="calc"></div>
        <div></div>
        <div className="CalcContainer">
            
        {calcData.map((item, idx) => (<button key={idx} onClick={()=>(setCalc((c) => {return c + item}))}>{item}</button>))}
        {operAnd.map((item, idx) => (<button key={idx} onClick={()=>(calcFunc(item))}>{item}</button>))}
   </div>
   {/* <div className="result"><Result/></div> */}
   </>
    )
};


// one set of state for the current result
// one set of state for the selected operation
// 
export default RenderCalc