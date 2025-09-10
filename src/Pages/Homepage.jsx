import { useState } from "react";

export default function Homepage() {
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>Welcome to my homepage!</div>
      <div>My number is at {count}</div>
      <button onClick={increaseCount}>Click ME</button>
    </>
  );
}
