import React from "react";
const Num = (props) => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(5);
  return (
    <>
      <h3 style={{ color: "red" }}>Count is {count}</h3>
      <button onClick={() => setCount(count + 1)}>add</button>
      <div>
        <h3 style={{ color: "orange" }}>Count is {count2} </h3>
        <button onClick={() => setCount2(count2 + 2)}>Multiply by 2</button>
      </div>
    </>
  );
};
export default Num;
