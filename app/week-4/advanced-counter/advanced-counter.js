export default function AdvCounter({currentCount,incrementCounterFunction, resetCounterFunction}){
   
    let btnDisable = false;
    if(currentCount > 10){
        
    }
   
    let btnStyles = "bg-blue-600 rounded-md p-1 text-white px4 mt-5 hover:bg-blue-400 active:bg-yellow-500 disables:bg-gray-400";

    return(

    <div className="bg-slate-300 p-5">
            <h2 className="text-2x1">Simple Counter</h2>
            <p className="text-lg">Count: {currentCount} </p>
            <button className={btnStyles} onClick={incrementCounterFunction}>Increment by 1</button>
            <button onClick={resetCounterFunction} className={btnStyles}>Reset Counter</button>
        </div>
   )  
}