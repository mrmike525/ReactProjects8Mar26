function MissionCard({missionCount, missionName, missionStatus, missionCrew, missions, missionState, setMissionState}){
    return(
<div className="MissionControl"> <b> Mission ID: </b>{missionCount[0]} <b> Mission Name: </b>{missionName[0]} <b> Mission Status: </b> {missionStatus[0]} <b>Crew: </b>{missionCrew[0] + " && " + missionCrew[1]} 
<br/> <br />
{missionState}
<button onClick={()=>(setMissionState(()=>missionStatus[1]))}>click to change</button>
</div> 
    )
}

export default MissionCard;