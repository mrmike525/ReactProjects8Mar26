import "./RenderCalc.css"
import { useState } from "react";

function RenderCalc(){
    const calcData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operAnd = [ "🟰", "➕", "➖", "✖️", "➗", "DEL"];
    const [calc, setCalc] = useState(0);
    return (
        <>
        <div className="calc">{calc} </div>
        <div className="CalcContainer">
            
        {calcData.map((item, idx) => (<button key={idx} onClick={()=>(setCalc((c) => {return c + item}))}>{item}</button>))}
        {operAnd.map((item, idx) => (<button key={idx} onClick={(c)=>(setCalc(calc + c))}>{item}</button>))}
   </div>
   </>
    )
};

export default RenderCalc