

const Chakra = function({color, children, id}) {
    console.log(color);
    
    
    return <div id={id} style={{backgroundColor: color, width: "200px", height: "200px", alignContent: "center", borderRadius: "120px"}}>
        <span>Sombody Help Me Please!</span>
        {children}
        
    </div>
};
export default Chakra;

// style= {{backgroundColor color === "green" ? "orange" : "green"}}

