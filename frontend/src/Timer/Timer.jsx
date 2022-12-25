import React, { useState, useEffect } from 'react';
import './styles.css';
import {motion, useAnimation } from 'framer-motion';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Timer = () => {

  const timerAnimation = useAnimation();

  const [timer, setTimer] = useState(10);
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    // Animate the timer when the page renders for the first time
    timerAnimation.start({
      scale: [1, 0.5],
      opacity: [1, 0],
      transition: { duration: 1 },
    });

    setTimeout(() => {
      if(timer!==0) { 
      // While the timer hasn't reached zero, decrement it by 1 every second and repeat the animation
      setTimer(timer-1);
      timerAnimation.start({
        scale: [1, 0.5],
        opacity: [1, 0],
        transition: { duration: 1 },
      });}
      else {
        setTimeOut(true);
      }
    }, 1000); 
  }, [timer, timerAnimation]);


  return (
      <div className={ timeOut ? 'container-timeout' : 'container' }>
        {
          // If the timer is over, display the happy new year text with letter by letter animation
          timeOut ?
          <motion.h1 className='headline'>{"Happy New Year".split('').map((letter, index) => (
            <motion.span 
              key={ index } 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: index * 0.1 }}
              >
              { letter }
            </motion.span>
          ))}</motion.h1>

          :
          // If the timer is still counting, display it with a circular progress bar around it
          <CircularProgressbarWithChildren 
            value={ 100-timer*10 } 
            styles={{
              path:{
              stroke: '#C91E1B'
          }}}>
            <motion.div 
              className='timer' 
              animate={ timerAnimation }>
              { timer }  
            </motion.div> 
          </CircularProgressbarWithChildren>         
        }
      </div>
  );
}

export default Timer;