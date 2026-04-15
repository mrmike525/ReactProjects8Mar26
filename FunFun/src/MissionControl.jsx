import "./MissionControl.css"
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import { useState } from "react";

function MissionControl({missions}){
    
    return(
     missions.map(({id, name, status, crew})=>
      {return <div className="contentContainer"> <div className="CardContainer"> <MissionCard id={id} name={name} status={status} crew={crew}/> <MissionAction/></div></div>})
      )}

export default MissionControl;