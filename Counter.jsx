import React from 'react'
import { useState } from 'react';
const Counter = () => {
    const [count,setCount]=useState(0);
    
    function press_add(){
        setCount(count+1);
    }

    function press_sub(){
        if(count>0){
             setCount(count-1);
        }
       
    }
    return (
    <>
    <h1 style={{color:"white"}}>{count}</h1>
    <button onClick={press_add}>Add</button>
    <button onClick={press_sub}>Sub</button>
    </>
  )
}

export default Counter
