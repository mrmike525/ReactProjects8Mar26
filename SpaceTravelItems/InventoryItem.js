function InventoryItem({ items }) {
  return items.map(({ name, type, quantity = 0, price }) => (
    /* TODO: Take the props. Set defaults to the quantity. */

    <div>
      <ul>
        <li>
          <h2 style={{ color: "black" }}>
            Name: {name},Type: {type},
          </h2>
          <Message quantity={quantity} price={price}>
            <p>Let's TACOBOUT DIS!</p>
          </Message>
        </li>
      </ul>
    </div>
  ));
}
{
  /* <h2 style={{ color: quantity === 10 ? "yellow" : "red" }}></h2> */
}
{
  // this.map(function blah() {});
  // function InventoryItem({ items }) {
  //   return items.map(({ name, type, quantity = 0, price }) => (
  //     <div key={name}>
  //       <h2>
  //         {name}, {type}, {quantity}, {price}
  //       </h2>
  //     </div>
  //   ));
  // }
}
