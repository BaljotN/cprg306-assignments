"use client"
import {useState} from "react";

export default function NewItem(){

    
   

    const[quantity,setQuantity]=useState(1);
    const[iBtnDisable,setIBtnDisable]=useState(false);
    const[dBtnDisable,setDBtnDisable]=useState(false);
    
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
            setIBtnDisable(quantity + 1 >= 20);  
            setDBtnDisable(false);              
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setDBtnDisable(quantity - 1 <= 1);  
            setIBtnDisable(false);              
        }
    };

    let buttonStyle = "bg-blue-600 rounded py-3 px-5 mt-3 mr-2 hover:bg-blue-400 disabled:bg-gray-400"

    return(
        <main className=
        "m-auto bg-white text-black w-32 place-items-center text-center rounded-md">
            <h1>{quantity}</h1>

            <button onClick={increment}
            disabled={iBtnDisable}
            className={buttonStyle}>+</button>
            
            <button onClick={decrement}
            disabled={dBtnDisable}
            className={buttonStyle}>-</button>
        </main>
    );
}

    