import { useState } from 'react'
import Abby from './Abby'
import './App.css'

function App() {
  const initialState = {
    username: "", 
    email: "",
    password: ""
  }
  let [typedValue, setTypedValue] = useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault();
    const {username, email, password} = typedValue;
    setTypedValue(initialState)
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setTypedValue(previous =>({
      ...previous, 
      [name]: value
    }))
  }
  return (
    <>
    <form action="" onSubmit={handleSubmit} >
      <label htmlFor="username">Username</label>
      <input type="text" value={typedValue.username} onChange={handleChange} placeholder='username' name='username' id='username'/>
      <label htmlFor="email">Email</label>
      <input type="email" value={typedValue.email} onChange={handleChange} placeholder='email' name='email' id='email'/>
      <label htmlFor="password">Password</label>
      <input type="text" value={typedValue.password} onChange={handleChange} placeholder='password' name='password' id='password'/>
      <button>Submit</button>
      
      </form>
      <div>{typedValue.name}</div>
    </>
  )
}

export default App


{/* <Abby/> */}