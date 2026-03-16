import { useState } from 'react'

function Practice(){
const [color, setColor] = useState('orange')

return (
<button
          className="color"
          onClick={() => setColor(() => "blue")}
          onDoubleClick={() => setColor(() => "orange")}
        >
          Color is {color}
          <br />
          <br />
          <div style={{width: "200px", height: "200px", backgroundColor: color}}></div>
        </button>
)
}
export default Practice;