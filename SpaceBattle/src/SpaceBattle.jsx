import { useState } from "react";
import "./SpaceBattle.css"

function SpaceBattle() {
  const [yourLife, setYourLife] = useState(100);
  const [enemysLife, setEnemysLife] = useState(100);
  const [gameStatus, setGameStatus] = useState("Game In Play!");

  function getRandomDamage(range = 100) {
    return Math.floor(Math.random() * range);
  }

  function updateGameStatus() {
    if (gameStatus !== "Game In Play!") return;
    const yourDamage = getRandomDamage(100);
    const enemyDamage = getRandomDamage(100);

    const newYourLife = Math.max(yourLife - yourDamage, 0);
    const newEnemyLife = Math.max(enemysLife - enemyDamage, 0);

    setYourLife(newYourLife);
    setEnemysLife(newEnemyLife);
    
    if (newYourLife <= 0 && newEnemyLife <= 0) {
      setGameStatus("DRAW!!");
      return
    } else if (newYourLife <= 0) {
      setGameStatus("YOU LOSE!! GAME OVER");
      return
    } else if (newEnemyLife <= 0) {
      setGameStatus("YOU WIN!!");
      return
    } else {
      setGameStatus("Game In Play!");
    }
  }

  return (
    <>
      <div className="buttonContainer">
        <h3 className="yourHealth" style={{ display: "inline" }}>
          Your Health{" "}
          <span style={{ color: yourLife > 0 ? "green" : "red" }}>
            {yourLife}
          </span>
        </h3>

        <button className="fireButton" onMouseDown={updateGameStatus}>Click To Fire!</button>

        <h3 className="enemysHealth" style={{ display: "inline" }}>
          Enemy's Health{" "}
          <span style={{ color: enemysLife > 0 ? "green" : "red" }}>
            {enemysLife}
          </span>
        </h3>
      </div>
        <div className="resetContainer"><button className="resetButton" style={{display: gameStatus === "Game In Play!" ? "none": "inline"}} onClick={()=>{setEnemysLife(100); setYourLife(100); setGameStatus("Game In Play!")}}>Reset</button></div>
      <div className="gameStatus">{gameStatus}</div>
    </>
  );
}

export default SpaceBattle;