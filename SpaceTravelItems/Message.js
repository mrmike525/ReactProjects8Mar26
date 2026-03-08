function Message({ quantity, price, children }) {
  return (
    <div>
      <h3
        style={{ color: quantity <= 5 ? "hsla(14, 78%, 55%, 1.00)" : "black" }}
      >
        Quantity:{" "}
        {quantity <= 5 ? quantity + " " + "‼️ Warning low stock" : quantity},
        Price:{" "}
        {price * quantity >= 1000
          ? price + "💰 High Value Supplies, Consider Extra Protection"
          : price}
      </h3>
      {children}
    </div>
  );
}

{
  /* TODO: Take the props. */
}
