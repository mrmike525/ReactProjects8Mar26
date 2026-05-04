import { useState } from 'react'

function Form({addItem}) {
const INITIAL_STATE = () => ({
    id: "",
    item: "",
    qty: ""
})
 const [formData, setFormData] = useState(INITIAL_STATE)
const handleChange = ((e) => {
    const {name, value} = e.target;
    setFormData((prev)=>({
        ...prev,
        [name]: value
    }))
})
    const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(INITIAL_STATE);
    addItem(formData.name, formData.qty)
}

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="item">Item</label>
            <input type="text" 
            name='item'
            placeholder='Item'
            onChange={handleChange}
            value={formData.item}
            id='item'
            />
             <label htmlFor="qty">Quantity</label>
            <input type="text" 
            name='qty'
            placeholder='Quantity'
            onChange={handleChange}
            value={formData.qty}
            id='qty'
            />
            <button>Submit</button>
        </form>
        <div>
        ITEM: {formData.item}
        </div>
        <div>
        QTY: {formData.qty}
        </div>
      </div>
    </>
  )
}

export default Form