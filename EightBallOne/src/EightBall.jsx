import { useState } from 'react'
import './EightBall.css'

const EightBall = ({source}) => {
    console.log(source[0])
    function randomNum(){
        const randoNum = Math.floor(Math.random() * source.length - 1);
        console.log(randoNum);
        return randoNum
    } 
    let answer = randomNum();
    console.log(answer);
    const [oracle, setOracle] = useState(20);
    const [ballColor, setBallColor] =useState();
    console.log(oracle)
    const style = source[oracle].msg === source[20].msg ?{fontSize: "30px", left: "17%", backgroundColor: source[oracle].color} : {fontSize: "25px", backgroundColor: source[oracle].color, margin: '10px', marginLeft: "15px"};
    return (
        <>
        
        <div className='eightball' style={{backgroundColor: source[oracle].color} }>
        <button style = {style}
        onClick={() => {setOracle(()=>{const rando = randomNum();
        return rando
        });}}> {source[oracle].msg} </button>
        {/* <li>help</li> */}
        </div> 
        <button className='reset' onClick={()=>setOracle(20)}>Reset</button>
        
        
        </>
    )
}

export default EightBall;