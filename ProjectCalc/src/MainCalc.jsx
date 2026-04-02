import RenderCalc from "./RenderCalc";
function mainCalc(){
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operators = ["+", "-", "*", "/", "="];
    function add(valueA, valueB){return valueA + valueB};

    return (
        <>
        
        <h2>Hi</h2>
        <RenderCalc nums={digits} operation={operators} add={add}/>
    </>
    )
}

export default mainCalc;