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
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default Counter