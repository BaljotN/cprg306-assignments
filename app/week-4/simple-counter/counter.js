"use client"

import { useState } from "react"

export default function SimpleCounter(){


    const [count, setCount] = useState(0);

    //cant call on setCount b/c it re-renders the page so it would make a infinite loop :3
    //ex setCount(1) gives infinite loop so page wont render 
    const incrementCounter = () =>{
        setCount(count+1)
    }

    return(
        <div>
            <h2>Simple Counter</h2>
            <p>Count: {count} </p>
            <button className="bg-blue-500 rounded-md p-1" onClick={incrementCounter}>Increment by 1</button>
        </div>
    )
}