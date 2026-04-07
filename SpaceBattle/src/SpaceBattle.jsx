import { useState } from "react";

function SpaceBattle(){
   const [yourLife, setYourLife] = useState(100);
   const [enemysLife, setEnemysLife] = useState(100);
    const [gameStatus, setGameStatus] = useState(null);
   function randomDamage(range = 100){
   const x = () => Math.floor(Math.random() * range);
   setYourLife((value)=>{return value - x()});
    setEnemysLife((value)=>{return value - x()});
    if(setYourLife >= 0){
        setGameStatus("YOU LOSE!! GAME OVER")
    }
    return x()
  }
    // console.log(randomDamage())
    return (
        <>
        <div className="buttonContainer">
            <h3 style={{display: "inline"}}>Your Health <span style={{ color: yourLife >= 0? "green" :"red" }}> {yourLife}</span></h3>
            <button onClick={()=>{randomDamage()}}>Click To Fire!</button>
            <h3 style={{display: "inline"}}>Enemy's Health <span style={{color: enemysLife >= 0? "green" : "red"}}>{enemysLife}</span></h3>
        </div>
        <div><button onClick={()=> (console.log(randomDamage(80)))}>Get Value</button></div>
        <div>{gameStatus}</div>
        </>
    )
}

export default SpaceBattle;