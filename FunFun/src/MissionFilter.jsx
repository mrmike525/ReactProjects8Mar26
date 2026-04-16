import "./MissionFilter.css"
function MissionFilter(){
    return(
        <div className="header">
            <button className="All">All</button>
            <button className="Planned">Planned</button>
            <button className="Active">Active</button>
            <button className="Completed">Completed</button>
        </div>
    )
}

export default MissionFilter