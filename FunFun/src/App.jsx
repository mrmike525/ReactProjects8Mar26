import { useState } from 'react'
import './App.css'
import Chakra from './Chakra';
import MissionControl from './MissionControl';
function App() {
  const missionCount = [1,2,3,4,5,6,7,8,9,10];
  const missionName = ["Study Asteroid","Setup Sun Observation Sattelite","Fly Around The Moon","Setup Moon Base"," Mine Minerals From The Moon","Jump On The Moon", "Enjoy The Sunset On The Moon", "Nuke The Moon", "Leave The Moon", "Setup Farm On Mars", "Nuke Test Mars" ]
  const status = ["Planned", "Active", "Completed"]
  const crew = ["Michael", "Abby", "Tom", "Tina", "Becca"]
  const missions = [
    {
      id: "1",
      name:  "Study Asteroid",
      status: "Planned",
      crew: "Becca, Michael"
    },
     {
      id: "2",
      name:  "Setup Sun Observation Sattelite",
      status: "Planned",
      crew: "Abby, Michael"
    },
    {
      id: "3",
      name:  "Fly Around The Moon",
      status: "Planned",
      crew: "Tina, Tom"
    },
    {
      id: "4",
      name:  "Setup Moon Base",
      status: "Planned",
      crew: "Tina, Abby"
    },
    {
      id: "5",
      name:  " Mine Minerals From The Moon",
      status: "Planned",
      crew: "Michael, Becca"
    },
    {
      id: "6",
      name:  "Jump On The Moon",
      status: "Planned",
      crew: "Michael, Becca"
    },
    {
      id: "7",
      name:  "Enjoy The Sunset On The Moon",
      status: "Planned",
      crew: "Abby, Michael"
    },
     {
      id: "8",
      name:  "Nuke The Moon",
      status: "Planned",
      crew: "Abby, Michael"
    },
    {
      id: "9",
      name:  "Leave The Moon",
      status: "Planned",
      crew: "Abby, Michael"
    },
    {
      id: "10",
      name:  "Nuke Test Mars",
      status: "Planned",
      crew: "Tom, Michael"
    },
     ];

  return (
    <>
    <MissionControl missions={missions} missionStatus={status}/>
     
    </>
  )
}

export default App
