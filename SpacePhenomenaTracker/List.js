function List(props){
    const roll = function() {
        let x =  (Math.floor(Math.random() * props.study.length));
        return x }
        return props.phenomena.map(({id, name, emoji}) => (
<li key= {id}> {emoji} {name} <b style={{color: "blue"}}>
    {props.study[roll()] === "🚀 Prime for Study" ? "🚀 Prime for Study" + " (Gear up with your best equipment)" : props.study[roll()]}</b></li>
    ))
}

 