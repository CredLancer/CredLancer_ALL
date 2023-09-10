import React, { useState, useEffect } from 'react';

const DisplayTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  return (
    <div style={{color: '#321975', width: '200px'}}>
      {hours % 12}:{minutes < 10 ? `0${minutes}` : minutes} {ampm}
    </div>
  );
};

export default DisplayTime;