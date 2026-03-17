import ColorButton from "./ColorButton"
import "./ColorButtons.css"
const ColorButtons = ({options, addCircle}) => {
    return (
        <div className="ColorButtons">
            {options.map((color, idx) => (
                <ColorButton color={color} addCircle={addCircle} key={idx}/>
                ))}
        </div>
    )
}

export default ColorButtons