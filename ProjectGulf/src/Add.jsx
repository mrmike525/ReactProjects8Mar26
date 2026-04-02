function Add({value1 = 10, value2 = 20}){
     const sum = value1 + value2;
     console.log(sum)
    return(
        <>
        <h3>
            {sum}
            </h3>
            </>
    )
    }
    export default Add