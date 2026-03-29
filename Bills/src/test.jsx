import TestChild from "./TestChild"
import "./testObj.css"

function Test() {
    const testObj = [
        {
        id: 72
        },
        {
            id: 73
            
        },
        {
            id: 50
        },
        {
            id: "ONE"
        }
    ]
    return (
        <>
        <div>help me</div>
            <TestChild object={testObj} />
            <div className="testObjContainer">
            {testObj.map(({ id }, idx) => <h3 key={idx} className="testObj">{id }</h3> )}
            </div>
            </>
    )
};

export default Test