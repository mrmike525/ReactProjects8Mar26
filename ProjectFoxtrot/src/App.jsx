import { useState } from 'react'
import './App.css'
import ToDo from './ToDo'
function App() {
  
return (
    <>
    <ToDo title="ToDO" item={['"eat"', '"sleep"', '"code"']}/>
    <ToDo title="SetGoals" item={['do this now']}/>
    </>
  )
}

export default App
