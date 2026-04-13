import { useState } from 'react'
import './App.css'
import Chakra from './Chakra';

function App() {
  const [count, setCount] = useState(0);
  const missionCount = [1,2,3,4,5,6,7,8,9,10];
  const missionName = ["Study asteroid","Setup Sun observation sattelite","Fly around the Moon","Setup Moon Base"," Mine minerals from the Moon","Jump on the Moon", "Enjoy the Sunset on the Moon", "Nuke the Moon", "Leave the moon", "Setup Farm on Mars", "Nuke test Mars" ]
  const status = ["Planned", "Active", "Completed"]
  const crew = ["Michael", "Abby", "Tom", "Tina", "Becca"]
  const missions = [
    {
      id: "",
      name:  "",
      status: "",
      crew: ""
    },
     ]

  return (
    <>
     <div className='header' style={{border: "2px solid red"}}>
      <a href="">home</a>
      <a href="">Get him to the Greek!</a>
      <a href="">Let's Taco BOUT IT</a>
     </div>
     <div>Mission ID: {missionCount[0]} Mission Name: {missionName[0]} Mission Status: {status[0]} Crew: {crew[0] + " " + crew[1]} </div> 
     
     
    </>
  )
}

export default App
