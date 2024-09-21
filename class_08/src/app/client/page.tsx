'use client';
import React, { useState } from 'react'
import { useEffect } from 'react'
export default function page() {
    const [counter, setcounter]=useState(0)
    useEffect(()=>{
    console.log("Mounted ");
    return ()=>{
        console.log("unmounted ");
        
    };
    },[])
  return (
    <div>
      
      <h1>Counter value {counter}</h1>
      <button onClick={()=>{
        setcounter(counter+1)
      }}></button>
    </div>
  )
}
