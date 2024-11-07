import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setsec] = useState(0);
  const [isRunning, setISRunning] = useState(false);


  function handleReset (){
    setsec(0);
    setMin(0);
    setHour(0);


    setISRunning(false);

  }

  useEffect(() => {
    setTimeout(() => {
      if (isRunning) {
        if (sec >= 59) {
          if (min >= 59) {
            setHour(hour + 1);
            setMin(0);
          } else {
            setMin(min + 1);
            setsec(0);
          }
        } else {
          setsec(sec + 1);
        }
      }
    }, 1000);
  });

  return (
    <div>
      <button onClick={() => setISRunning(true)}>Start</button>
      {hour}:{min}:{sec}
      <button onClick={() => setISRunning(false)}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Useeffect;
