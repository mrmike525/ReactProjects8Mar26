function MissionCard({missionCount, missionName, missionStatus, missionCrew, missions, missionState, setMissionState}){
    return(
<div className="MissionControl"> <b> Mission ID: </b>{missionCount[0]} <b> Mission Name: </b>{missionName} <b> Mission Status: </b> {missionState} <b>Crew: </b>{missionCrew[0] + " && " + missionCrew[1]} 
<br/> <br />
{missionState}
<button onClick={()=>(setMissionState((value)=>{if(value === missionStatus[0]){return missionStatus[1]} else if(value === missionStatus[1]){return missionStatus[0]} else{return missionStatus[2]}}))}>click to change</button>
</div> 
    )
}

export default MissionCard;