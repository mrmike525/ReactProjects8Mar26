import './ColorButtons.css'
const ColorButton = ({color, addCircle, idx}) => {
    return (
    <button 
        onClick={() => addCircle(color)} 
        className="ColorButton"
        style={{backgroundColor: color}}
        key={idx}
    >
      {color}
    </button>
        
  )
}

export default ColorButton