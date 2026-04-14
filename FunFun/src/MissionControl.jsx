import "./MissionControl.css"
import MissionCard from "./MissionCard";
import { useState } from "react";

function MissionControl(){
      const missionCount = [1,2,3,4,5,6,7,8,9,10];
  const missionName = ["Study Asteroid","Setup Sun Observation Sattelite","Fly Around The Moon","Setup Moon Base"," Mine Minerals From The Moon","Jump On The Moon", "Enjoy The Sunset On The Moon", "Nuke The Moon", "Leave The Moon", "Setup Farm On Mars", "Nuke Test Mars" ]
  const status = ["Planned", "Active", "Completed"]
  const crew = ["Michael", "Abby", "Tom", "Tina", "Becca"]
  const missions = [
    {
      id: "",
      name:  "",
      status: "",
      crew: ""
    },
     ];
     const [missionState, setMissionState] = useState(status[0]);
return (
  <>
    <MissionCard missionCount={missionCount} missionName={missionName.map((item, idx)=>(<div><ul><li> {idx} {item} </li></ul></div>))} missionStatus={status} missionCrew={crew} missions={missions} missionState = {missionState} setMissionState={setMissionState}/>
   <div className="mapContainer">{missionName.map((item)=>(<div className="map">{item}</div>))}</div>
   </> 
)
}

export default MissionControl;