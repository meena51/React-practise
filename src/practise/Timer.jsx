import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  const tick = (prevCount) => {
    setCount( prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      {count}
    </div>
  );
}

export default Timer;
