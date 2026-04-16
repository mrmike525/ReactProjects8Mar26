import "./MissionAction.css"

function MissionAction({id, updateMissionStatus, missionStatus}) {
    return(
        <div className="MissionButtonContainer">
            <div className="MissionButton">
        <button 
        className="launch" 
        onClick={() => updateMissionStatus(id, missionStatus[1])}
        >
            Launch Mission
            </button>
        <button 
        className="pause" 
        onClick={()=> updateMissionStatus(id, missionStatus[0])}
        >Pause Mission
        </button>
        <button 
        className="complete" 
        onClick={() => updateMissionStatus(id, missionStatus[2])}
        >
        Complete
        </button>
        </div>
   </div>
    );
}

export default MissionAction