


const Chakra = function({color, children}) {
    console.log(color);
    let greenWidth = "200px"
    if(color === "green"){
        greenWidth = "600px"
    }
    return <div style={{backgroundColor: color, width: greenWidth, height: "200px", alignContent: "center"}}>
        {children}
    </div>
};
export default Chakra;

// style= {{backgroundColor color === "green" ? "orange" : "green"}}

