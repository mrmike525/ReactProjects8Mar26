import { useState } from "react";
import "./ToDo.css"
const ToDo = ({title, item=[]}) => {
const [heading, setHeading] = useState(title);
return (
    <div className='ToDoHead' >
    <h1 onClick={()=> {
        heading === heading.toLowerCase() ?
        setHeading(heading.toUpperCase()):
        setHeading(heading.toLowerCase());


    }}>  
        {heading}
    </h1>
<ul className = "list">
    {item.map((item, idx) => (
        <li key={idx}>{item.toUpperCase()}</li>
    ))}
</ul>
</div>
);
}
export default ToDo