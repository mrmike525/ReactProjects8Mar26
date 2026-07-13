import { useState } from "react";
import "./Forms.css"

function Forms() {
    const [state, setState] = useState("");
    const [renderedState, setRenderedState] = useState([]);
    // console.log(state);

    const handleChange = (e) => setState(e.target.value)
    const handleClick = (e) => {
        setRenderedState((current) => [...current, state]);
        console.log(renderedState);
    }
    const handleRemove = (idx) => {
        setRenderedState(current => 
            current.filter((item, i) => i !== idx)
        )
    
    }
    return (
        <>
            <div className="pageForm">
                <input type="text" value={state} onChange={handleChange} />
                <button onClick={() => handleClick()}>Add To The List!!</button>
                {renderedState.map((item, idx) => <div onClick={() => handleRemove(idx)} key={idx}>{item}</div >)}
            </div>
            </>
        )
    }

export default Forms;