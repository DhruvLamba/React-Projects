import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [counter,setCounter]=useState(15)
  const count=()=>{
    setCounter(counter+1)
  }
  return (
    <>
    <button className='' onClick={count}>
      add me {counter}
    </button>
    </>
  );
};
export default Counter;
      