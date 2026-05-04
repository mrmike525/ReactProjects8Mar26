import { useState } from "react"
const NewItemForm = () => {
const INITIAL_STATE = {
    name: "",
    qty: ""
}
const [formData, setFormData] = useState(INITIAL_STATE);
const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
        ...formData,
        [name]: value
    }))
}

return(
    <form action="">
        <label htmlFor="name">Product</label>
        <input 
        type="text" 
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        id="name"
        />
        <p>{formData.name}</p>

<label htmlFor="qty">Quantity</label>
        <input 
        type="text" 
        name="qty"
        placeholder="Item Quantity"
        value={formData.qty}
        onChange={handleChange}
        id="qty"
        />
        
        <p>{formData.qty}</p>
    </form>
)
}

export default NewItemForm