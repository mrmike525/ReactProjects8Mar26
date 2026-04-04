import RenderCalc from "./RenderCalc";
import { useState } from 'react'

function mainCalc() {
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState("+");
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operators = ["➕", "➖", "✖️", "➗", "🟰", "DEL"];
    
    
    function add(valueA, valueB) { return valueA + valueB };
    function subtract(valueA, valueB){return valueA - valueB};
    function multiply(valueA, valueB){return valueA * valueB};
    function divide(valueA, valueB){return valueA / valueB};
    function del(valueA)
    {
        let returnedVal = valueA;
        if (valueA === "DEL")
        {
            setResult(0);
            return returnedVal
        } else {return returnedVal}
        
    };
    function multiFunc(valueA, valueB){
        if (operator === "➕") {
            return add(valueA, valueB)
        } else if(operator === "➖") {
            return subtract(valueA, valueB)
        }
        else if (operator === "✖️") {
            return multiply(valueA, valueB)
        }
        else if (operator === "➗") {
            return divide(valueA, valueB)
        } else {return valueA}
    }
    return (
        <>
        
        {/* <h2>Hi</h2> */}
            <RenderCalc nums={digits} operation={operators} add={add} subtract={subtract} multiply={multiply} divide={divide} del={del} result={result} setResult={setResult} operator={operator} setOperator={setOperator} multiFunc={multiFunc} />
    </>
    )
}

export default mainCalc;