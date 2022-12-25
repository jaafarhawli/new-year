import React, {useState, useEffect} from 'react';
import './styles.css';
import {motion, useAnimation } from 'framer-motion';

const Timer = () => {

  const timerAnimation = useAnimation();

  const [timer, setTimer] = useState(10);
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    timerAnimation.start({
      scale: [1, 0],
      transition: { duration: 1 },
    });

    if(timer>=0)
    setTimeout(() => {
      setTimer(timer-1);
      timerAnimation.start({
        scale: [1, 0],
        transition: { duration: 1 },
      });
    }, 1000);

    else
    setTimeOut(true);
  }, [timer, timerAnimation]);

  
  return (
    <div className='container'>
      {
        timeOut ?
        <motion.h1 className='headline'>Happy New Year</motion.h1>
        :
        <motion.div className='timer' animate={timerAnimation}>{timer}</motion.div>    
      }
    </div>
  );
}

export default Timer;
