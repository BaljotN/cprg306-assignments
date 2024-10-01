"use client"

import { useState } from "react";
import AdvCounter from "./advanced-counter"
import CounterDisplay from "./counter-display";

export default function AdvCounterPage(){
   
    const [count, setCount] = useState(0);

    //cant call on setCount b/c it re-renders the page so it would make a infinite loop :3
    //ex setCount(1) gives infinite loop so page wont render 
    const incrementCounter = () =>{
        
        if(count < 10){
            setCount(count+1)
        }
    }

    const resetCounter = () =>{
        setCount(0);
    }

    return(
        <div className="p-5">
            <AdvCounter currentCount={count} 
            incrementCounterFunction={incrementCounter}
            resetCounterFunction={resetCounter}
            />
            <p>:3</p>
            <CounterDisplay currentCount={count}/>
        </div>
    )
}