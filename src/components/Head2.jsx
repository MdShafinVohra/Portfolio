import { useState } from "react";
export default function Head2({ className, specialArray }) {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prevCounter) => (prevCounter + 1) % specialArray.length);
  }
  return (
    <div className={`w-min ${className}`}>
      <div onAnimationIteration={incrementCounter} className="text-2xl animate-typeWriter typeWriter text-white flex">
        <p>{specialArray[counter]}</p>
      </div>
    </div>
  );
}
