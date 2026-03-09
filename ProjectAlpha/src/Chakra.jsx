const Chakra = function({color, value}) {
    const choice = (color, value)=>{color + "." + value};
    console.log(choice());
    console.log(value);
    console.log(color);
    const disected = color.Crown
    console.log(disected)
    return <div style={{backgroundColor: disected, width: "200px", height: "200px"}}></div>
};
export default Chakra;