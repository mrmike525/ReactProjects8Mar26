import { useState } from "react"
import Item from "./Item";
import NewItemForm from "./NewItemForm";
const ShoppingList = () => {
const INITIAL_STATE = [
    {id: 1, name: 'Peanut Butter', qty: 2},
    {id: 2, name: 'Whole Milk', qty: 1},
]
const [items, setItems] = useState(INITIAL_STATE);
return (
    <div>
    <h3>Shopping List</h3>
    <NewItemForm/>
    <div>
    {items.map(({id, name, qty}) => <Item id={id} name={name} qty={qty} key={id} />)}
    </div>
    <div className="Anniversary">
        <p>Fri 1 May (ANNIVERSARY) 

Schedule 

8-4:30 work... ? (sale day, important to company) 

2013? - now? 13 yrs since first date? 

 

Gifts? 

Abby likes stuff from Island Pezi 

Theme... Over the Years 

Sentimental Gifts Pictures of us over the yrs? 

Chocolates..  

No peanuts...  

weed 

Maybe a typed up bunch of Things I love about abby? 

Money for weed? 

 

Events? 

 

 

Sat 2 May (DATE DAY) 
maybe starting fri through the whole weekend?
it's a pretty big anniversary
</p>

    </div>
    </div>
)}

export default ShoppingList