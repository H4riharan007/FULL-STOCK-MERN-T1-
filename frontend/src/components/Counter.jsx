import React,{useState} from 'react'

const Counter = () => {
    const [Count,setCount]=useState(0);

    const handleIncrement = ()=>{
      setCount(count+1);
    }
    const handleDecrement = ()=>{};
     const handleReset = ()=>{}; 
  return (
    <div>
        <h1>{Count}</h1>
        <button onClick={handleincrement}>Increment</button>
        <button onClick={handlereset}>reset</button>
        <button onClick={handledecrement}>decrement</button>
    </div>
  )
}

export default Counter