import "./MissionControl.css"
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import { useState } from "react";

function MissionControl({missions, missionStatus}){
    const [missionList, setMissionList] = useState(missions);
    function updateMissionStatus(id, newStatus){
        setMissionList((prevMissions) =>
        prevMissions.map((mission) =>
        mission.id === id
    ? {...mission, status: newStatus }
      : mission
    )
);
    }
    return(
        <>
     {missionList.map(({id, name, status, crew})=>{
        return (
        <div key={id} className="contentContainer"> 
        <div className="CardContainer"> 
      <MissionCard 
      id={id} 
      name={name} 
      status={status} 
      crew={crew} 
      /> 
      
      <MissionAction
      id={id} 
      updateMissionStatus={updateMissionStatus}
      missionStatus={missionStatus} 
      />
      </div>
      </div>
      );
    })}
    </>
);
}

export default MissionControl;