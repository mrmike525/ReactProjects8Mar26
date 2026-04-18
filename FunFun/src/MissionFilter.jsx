import "./MissionFilter.css"
function MissionFilter({setMissionList, missionList, savedList, setSavedList}){
    function saveData(){
        if(savedList === null){
            setSavedList(missionList)
        } else {
            return
        }
    }
    function clickHandler(id){
const planned = missionList.filter((item)=> {return item.status === "Planned"});
const active = missionList.filter((item)=> {return item.status === "Active"});
const completed = missionList.filter((item)=> {return item.status === "Completed"});
if(id === "Planned"){
    return planned
} else if(id === "Active"){
    return active
} else {return completed}
}
// We store only the filter value instead of filtered data
// so mission updates always apply to the full list **** redo the code.. based on this idea...

    return(
        <div className="header">
            <button className="All" onClick={()=>(saveData(), setMissionList(savedList))}>All</button>
            <button className="Planned" onClick={()=>(saveData(), setMissionList(clickHandler("Planned")))}>Planned</button>
            <button className="Active" onClick={()=>(saveData(), setMissionList(clickHandler("Active")))}>Active</button>
            <button className="Completed" onClick={()=>(saveData(), setMissionList(clickHandler("Completed")))}>Completed</button>
        </div>
    )
}

export default MissionFilter