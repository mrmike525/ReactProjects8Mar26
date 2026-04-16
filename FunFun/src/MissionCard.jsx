import "./MissionCard.css"

function MissionCard({id, name, status, crew}){
    return(
        
<div className="MissionCard" > 
      <b>ID:</b>{id} <b>Name:</b>{name} <b> <br /> Status:</b>{status} <br /> <b>Crew:</b>{crew} </div> 
    )
}

export default MissionCard;