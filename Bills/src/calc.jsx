import { useState } from "react"

function calc(){
const [equation, setEquation] = useState(0);

const add = setEquation((v = 5) => {return v + equation });
const subtract = setEquation((v)=> (equation - v ));
const multiply = setEquation((v)=> (equation * v ));
const divide = setEquation((v)=> (equation / v));

return add
}

export default calc