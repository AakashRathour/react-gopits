import React, { useState } from "react";

const ButtonClick = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const increement = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      {/* <button onClick={() => alert("Hello!")}>Button</button> */}

      <button onClick={increement}>Increement</button>
      <h3>{count}</h3>
      <h1>Counter</h1>
      <button onClick={decrement}>Decrement</button>
      <div className="tEST mt-5">
        <button
          onClick={() => {
            setCount1((count1 = +1));
          }}
        >
          Hi Click Me {count1}
        </button>
      </div>
    </>
  );
};

export default ButtonClick;
