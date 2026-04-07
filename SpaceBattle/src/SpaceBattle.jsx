import { useState } from "react";

function SpaceBattle(){
   const [yourLife, setYourLife] = useState(100);
   const [enemysLife, setEnemysLife] = useState(100);

   function randomDamage(){
   const x = Math.floor(Math.random() * 100);
   return x;
  }
  let y = randomDamage();
    console.log(randomDamage())
    return (
        <>
        <div className="buttonContainer">
            <h3 style={{display: "inline"}}>Your Health<span style={{color: "green"}}>{yourLife}</span></h3>
            <button onClick={()=>{setYourLife((value)=>{return value - randomDamage()});
        setEnemysLife((value)=>{return value - randomDamage()})
        }}>Click To Fire!</button>
            <h3 style={{display: "inline"}}>Enemy's Health <span style={{color: "green"}}>{enemysLife}</span></h3>
        </div>
        <div><button onClick={()=> (console.log(randomDamage()))}>Get Value</button></div>
        </>
    )
}

export default SpaceBattle;