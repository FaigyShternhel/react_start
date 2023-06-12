import React, { useEffect, useState } from 'react'
 
 export default function DataView(props) {
    const [days,setDays]=useState(999);
    
    useEffect(()=>{
        calcDays(props.deadline);
    },[props.deadline])
   const calcDays=(_newDate)=>{
    let time=Date.parse(_newDate)-Date.now();
    let newDays=Math.ceil(time/(1000*60*60*24))
    setDays(newDays);
   }
    return (
   <div className='text-center'>
    <h2>Countdown to: {props.deadline}</h2>
    <h3>Days left:{days}</h3>
   </div>
        
   )
 }