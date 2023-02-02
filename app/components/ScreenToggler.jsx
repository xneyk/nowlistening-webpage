'use client'
import React, { useState, useEffect } from 'react'
import button from './screentoggler.module.css'

export default function ScreenToggler(props) {

   const [indicator, setIndicator] = useState(0);

   const handleClick = (j) => {
      setIndicator(j);
      props.setDataIndex(j);
   }

   useEffect(() => {
      const interval = setInterval(() => {
         let i = indicator;
         i >= 2 ? i = 0 : i++;
         setIndicator(i);
         props.setDataIndex(i);
      }, 5000);
      return () => clearInterval(interval);
   }, [indicator, props]);

   return (
      <div className={button.container}>
         <button
            onClick={() => handleClick(0)}
            className={indicator == 0 ? button.active : button.button}>
            <p className={button.text}>Photo&Music Post</p>
         </button>
         <button
            onClick={() => handleClick(1)}
            className={indicator == 1 ? button.active : button.button}>
            <p className={button.text}>Opinion Forum</p>
         </button>
         <button
            onClick={() => handleClick(2)}
            className={indicator == 2 ? button.active : button.button}>
            <p className={button.text}>Meet your friends</p>
         </button>
      </div>
   )
}