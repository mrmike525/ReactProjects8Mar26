import RenderAdd from "./RenderAdd";
function BigAdd(){


function Add({value1 = 10, value2 = 20}){
     const sum = value1 + value2;
    return sum;
    }
    const Alt = (()=>Add());
return(
        <>
        <h3> 70 </h3>
       <RenderAdd Add={Add}></RenderAdd>
            </>
    )}
    export default BigAdd