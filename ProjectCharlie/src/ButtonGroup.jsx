
const ButtonGroup = ({className}) => {
    const printColor = (color) => {
        console.log(`YOU CLICKED: ${color.toUpperCase()}`)
    }
    return (
        <div className = {className}>
            <button onClick={() => printColor('Red')}>Red</button>
            <button onClick={() => printColor('Yellow')}>Yellow</button>
            <button onClick={() => printColor('Green')}>Green</button>
        </div>
    )
};

export default ButtonGroup;