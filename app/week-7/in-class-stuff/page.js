"use client"

import { useState } from "react";
//Creating a variable to grab info from dogs.json
import dogData from "./dogs.json"
import DogList from "./dog-list";
import DogForm from "./dog-form";

export default function AdoptionPage(){
    //Defensive Copy
    let dogArray = dogData.map((dog) => ( {...dog} ) );
    //Create use state variable with copied data
    const [dogList,setDogList] = useState(dogArray);

    const[showForm,setShowForm] = useState(false);

    // const addNewDog = (newDogObj) => {
    //     setDogList([...dogList, newDogObj])
    // }

    const removeDog = (event) => {
        let thisDogList = dogList.filter( 
            (dog) => dog.id != event.target.getAttribute("data-dog-id")
        );

        setDogList(thisDogList);
    }

    const openForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);
    return(
        <main>
            {showForm && <DogForm addNewDogFunc={addNewDog} closeFormFunc={closeForm}/>}
            <div className="w-8 h-8 rounded-full overflow-hidden leading-none absolute top-5 right-5 z-0">
                <button type="button" 
                onClick={openForm}
                className="bg-green-700 text-white p-2 rounded-lg text-3xl w-full h-full"
                >+</button>
            </div>
            <DogList listOfDogs={dogList} removeDogFunc={removeDog}/>
            
        </main>
    );
}