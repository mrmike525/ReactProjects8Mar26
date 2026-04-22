import me from './assets/Me.jpeg'
import { useState } from "react"
function Form(){
    const [value, setValue] = useState(null)
    const event = (e) => {
        setValue(e.target.value);
    
    }
    const newEvent = (e) => {
        setValue(e.target.value)
    }
    const preventDefault = (e) => {
        e.preventDefault()
    }
        return (
        <>
        <div style={{display: "flex", justifyContent: "center", marginBottom: "25px"}}>
        
        <div style={{width: "300px", height: "300px", border: "5px solid red", display: "flex", justifyContent: "center", overflow: "hidden", borderRadius: "200px"}}><img style={{borderRadius: "300px"}} src={value === null ? !value : value}/></div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <form  onSubmit={preventDefault} action="">This Da FORM!
      <input type="text" onChange={event}/>
      <input type="text" onChange={newEvent}/>
      <button onClick={preventDefault}>Submit</button>
      <button onClick={()=>setValue(me)}>set as Picture</button>
      </form>
      </div>
        </>
    )
}

export default Form


// the method is on an input, add an onChange, then run an event function that takes the event as a argument, then runs the setState usisng the event.target.value  to set the state.. then that gets pushed into state