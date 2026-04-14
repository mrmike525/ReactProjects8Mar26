import "./MissionControl.css"
import MissionCard from "./MissionCard";
import { useState } from "react";

function MissionControl({missions}){
    
    return(
     missions.map(({id, name, status, crew})=>
      {return <div key={id}> 
      <b>ID:</b>{id} <b>Name:</b>{name} <b>Status:</b>{status} <b>Crew:</b>{crew}</div>})
      )}

export default MissionControl;