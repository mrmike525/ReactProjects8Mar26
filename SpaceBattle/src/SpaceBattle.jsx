import { useState } from "react";

function SpaceBattle(){
   const [yourLife, setYourLife] = useState(100);
   const [enemysLife, setEnemysLife] =useState(100);

   function randomDamage(){
   const x = Math.floor(Math.random() * 100);
   return x;
  }
  let y = randomDamage();
    console.log(randomDamage())
    return (
        <div className="buttonContainer">
            {yourLife}
            <button onClick={()=>{setYourLife((value)=>{return value - randomDamage()});
        setEnemysLife((value)=>{return value - randomDamage()})
        }}>Click To Fire!</button>
            {enemysLife}
        </div>
    )
}

export default SpaceBattle;