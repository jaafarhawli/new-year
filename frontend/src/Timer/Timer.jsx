import React, {useState, useEffect} from 'react';
import './styles.css';

const Timer = () => {

  const [timer, setTimer] = useState(10);
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    if(timer>=0)
    setTimeout(() => {
      setTimer(timer-1)
    }, 1000);
    else
    setTimeOut(true);
  }, [timer]);

  return (
    <div className='container'>
      {
        timeOut ?
        <h1 className='headline'>Happy New Year</h1>
        :
        <div className='timer'>{timer}</div>    
      }
    </div>
  );
}

export default Timer;
