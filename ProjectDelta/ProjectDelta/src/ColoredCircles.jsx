import { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";

function  getRandom(min = 0, max = 100)

const ColoredCircles = () => {
    const [circles, setCircles] = useState(['cornflowerblue', 'peachpuff', 'lavender'])
    const addCircle = (color) => {
        setCircles(colors => [...colors, color]);
    };
    return (
        <div>
            <ColorButtons addCircle={addCircle} options={['peachpuff', 'lightsteelblue', 'paleturquoise']}/>
            <ColorButtons addCircle={addCircle} options={['orange', 'magenta', 'teal']}/>
            {circles.map((color, idx) => (
                <Circle color={color} idx={idx} key={idx}/>
            ))}
            
            
        </div>
    )
}

export default ColoredCircles;