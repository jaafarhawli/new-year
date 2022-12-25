import React, {useState, useEffect} from 'react';
import './styles.css';
import {motion, useAnimation } from 'framer-motion';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Timer = () => {

  const timerAnimation = useAnimation();

  const [timer, setTimer] = useState(10);
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    timerAnimation.start({
      scale: [1, 0.5],
      opacity: [1, 0],
      transition: { duration: 1 },
    });

    if(timer>=0)
    setTimeout(() => {
      setTimer(timer-1);
      timerAnimation.start({
        scale: [1, 0.5],
        opacity: [1, 0],
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
        <CircularProgressbarWithChildren value={100-timer*10} styles={{path:{
          stroke: '#C91E1B'}}}>
          <motion.div className='timer' animate={timerAnimation}>{timer}</motion.div> 
        </CircularProgressbarWithChildren>         
      }
    </div>
  );
}

export default Timer;
