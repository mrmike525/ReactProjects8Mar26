function TestChild({ object }) {
    console.log(object[0])
    return (
    <>
            {object.map(({ id }, idx) =>  <button key={idx}>{id}</button> ) }
    </>
            )
};
export default TestChild;