function InventoryItem({ items }) {
  return items.map(({ name, type, quantity = 0, price }) => (
    /* TODO: Take the props. Set defaults to the quantity. */

    
        <li>
          <h2 style={{ color: "black" }}>
            Name: {name},Type: {type},
          </h2>
          <Message quantity={quantity} price={price}>
            
          </Message>
        </li>
      
  ));
}

