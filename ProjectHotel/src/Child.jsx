import { useState } from "react"


function Child({ func, data }) {
    const [selectedItem, setSelectedItem] = useState(null);
    
    

    return (
        <>
            <li>This is the Child {func(22, 2)}</li>
            <ol>
                {data.map((item) => {
                    return <li 
                    key={item}
                    onClick={() => setSelectedItem(item)}
                    style={selectedItem === item ? {fontWeight: "bold", color: "red", fontSize: "50px"} : {color: "blue"}}
                   >{item}</li>
                })}
          </ol>
          <h4>
          {func(21, 5)}
          </h4>
            </>  
    )
}

export default Child