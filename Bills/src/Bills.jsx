import "./Bills.css" 
import { useState } from "react";

function Bills() {
    const taco = ['when', 'tequila', 'spices', "sour cream", "I have learned something"];
    function returnsData(...data) { return data };
    console.log(returnsData(...taco));
    const [ text, updateText ] = useState("");
      return (
        <>
            <div>
                  <textarea className="TextArea" value={text} onChange={(e) => updateText(e.target.value) } />
        <div className="BillsContainer">
                {taco.map((item, idx) => <button onClick={() => updateText(item)} className={item} key={idx}>{item}</button>)}
                  </div>
                  </div>
</>
    )
}

export default Bills