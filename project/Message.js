function Message() { 
  const fish = "fish";
  const rand = () => (Math.floor(Math.random() * 10) +1);
  const runRand = () => {
    const one = document.getElementsByClassName("one");
    for(const items of one){items.innerText = rand()};
  }
 return (
   <>
   <span><h1 className="one" style={{fontSize: "100px", display: "inline", margin: "20px", color: "red", backgroundColor: "black"}}>{rand()}</h1></span>
   <span><h1 className="one" style={{fontSize: "100px", display: "inline", margin: "20px", color: "white", backgroundColor: "black"}}>{rand()}</h1></span>
    <span><h1 className="one" style={{fontSize: "100px", display: "inline", margin: "20px", color: "blue", backgroundColor: "black"}}>{rand()}</h1></span>
      <p style={{ color: "orange", fontSize: "5rem"}}>Hello World@@!</p>
      <button onClick={() => (runRand())}> Roll The DICE
        </button>
      
    </>
 )
}
