import { useState } from "react"


function Child({ func, data }) {
    const [state, setState] = useState("");
    // const bold = setState(() => { style = { fontWeight: "bold" } });


    return (
        <>
            <li>This is the Child {func(22, 2)}</li>
            <ol>
                {data.map((item) => {
                    return <li key={item}
                        onClick={() => {style = { fontWeight: "bold" }}
}
                    >{item}</li>
                })}
          </ol>
            </>  
    )
}

export default Child