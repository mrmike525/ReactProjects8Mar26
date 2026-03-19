import { useState } from 'react'

const EightBall = ({source}) => {
    console.log(source[0])
    function randomNum(){
        const randoNum = Math.floor(Math.random() * source.length);
        console.log(randoNum);
        return randoNum
    } 
    let answer = randomNum();
    console.log(answer);
    const [oracle, setOracle] = useState(answer);
    console.log(oracle)
    return (
        <>
        
        <ul>
        <li onClick={() => {setOracle(randomNum)}}> {source[oracle].msg}  {source[oracle].color}</li>
        {/* <li>help</li> */}
        </ul> 
        
        
        </>
    )
}

export default EightBall;