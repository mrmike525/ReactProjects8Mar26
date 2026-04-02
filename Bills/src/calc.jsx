import { useState } from "react"
import RenderCalc from "./RenderCalc";

function Calc(){
const [equation, setEquation] = useState(0);

// const add = setEquation((v = 5) => {return v + equation });
// const subtract = setEquation((v)=> (equation - v ));
// const multiply = setEquation((v)=> (equation * v ));
// const divide = setEquation((v)=> (equation / v));

return (
    <RenderCalc result={Calc}/>
)
}

export default Calc