import { useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
const INITIAL_STATE = [{
  name: '', qty: ''
}]
  const [items, setItems] = useState(INITIAL_STATE)
  const addItem = (name, qty) => {
    setItems(items => [...items, {name, qty}])
  }
  return (
    <>
      {items.map(({name, qty}, idx) => <Form name={name} qty={qty} key={idx} addItem={addItem}/>)}
      {/* {items.map(({name, qty}, idx) => {return <div key={idx}> Name: {name} QTY: {qty}</div>})} */}
    </>
  )
}

export default App
