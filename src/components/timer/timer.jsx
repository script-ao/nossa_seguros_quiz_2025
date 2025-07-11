import React, { useState, useEffect } from "react";

function Timer({ onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) {
      if (onTimeUp) onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <React.Fragment>
      <div className="ti_wrapper"><span>{timeLeft}</span></div>
    </React.Fragment>
  );
}

export { Timer };
