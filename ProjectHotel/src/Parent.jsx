import Child from "./Child"
function Parent() {
    const add = (a, b) => (a + b);
    const data = ['taco', 'beef', 'chicken', 'This is the MAP']
    return (
        <>
        <h3>This is the Parent!</h3>
        <ol>
                <Child func={add} data={data} />
            </ol>
            </>
            )
}

export default Parent