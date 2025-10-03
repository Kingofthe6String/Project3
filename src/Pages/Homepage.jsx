import { useState } from "react";

export default function Homepage() {
  const [count, setCount] = useState(1);
  const [animate, setAnimate] = useState(false);

  const increaseCount = () => {
    setCount((prev) => prev + 1);

    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to my homepage!</h1>
      <p className="homepage-counter">
        My number is at{" "}
        <span className={`counter-number ${animate ? "bounce" : ""}`}>
          {count}
        </span>
      </p>
      <button onClick={increaseCount} className="counter-button">
        Click Me 🎉
      </button>
    </div>
  );
}
