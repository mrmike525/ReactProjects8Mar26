import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const advanceCount = () => setCount((c) => {return c + 1})
const Alpha = [
  'one', 'two', 'three', 'four', 'five'
];
function val(x){
  if(x === 'five'){
const add5 = (value = 5) => setCount + value;
return add5
  }
}
 

  return (
    <>
      <div className='state' onClick={() => advanceCount()}>
        {count}
      
      <button className='advanceState'>Click To Advance The Count</button>
    
    </div>
    <div className='ButtonContainer'>
    {Alpha.map((item, idx) => (<button key={item} className={item} onClick={item === 'five' ? add5 : null}> {item} </button>))}
</div>
    </>
)
}
export default App;
