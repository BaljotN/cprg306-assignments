"use client"
import { useState } from "react";


export default function DogForm({addNewDogFunc, closeFormFunc}){

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [breed,setBreed] = useState("");
    const [photoUrl,setPhotoUrl] = useState("");

    const handleIdChange = (event) =>setId(event.target.value);
    const handleSubmit = (event) =>{
        event.preventDefault();
        let newDog  = {
            id:id,
            name:name,
            breed:breed,
            photoUrl:photoUrl
        }
        addNewDogFunc(newDog); 
    }
    return(
        <div onClick={closeFormFunc} className="absolute w-full h-full bg-gray-700/60 flex items-center justify-center z-10">
            <form onSubmit={handleSubmit}
            onClick={(event) => event.stopPropagation()}
            className="bg-green-400 text-black p-5 rounded-lg max-w-md ">
                <h2 className="text-2xl text-center mb-2">Add a new dog for adoption</h2>
                <div className="mb-2">
                    <label className="inline-block w-40">ID: </label>
                    <input type="text" onChange={handleIdChange} value={id}/>
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Name: </label>
                    <input type="text" onChange={(event) => setName(event.target.value)} value={name}/>
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Breed: </label>
                    <input type="text" onChange={(event) => setBreed(event.target.value)} value={breed}/>
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">PhotoUrl: </label>
                    <input type="text" onChange={(event) => setPhotoUrl(event.target.value)} value={photoUrl}/>
                </div>
                <button type="submit"
                className="bg-green-700 text-white rounded px-1">Add New Dog</button>
                <button type="button"
                onClick={closeFormFunc}
                className="bg-blue-700 text-white rounded px-1 ml-3">Close Form</button>
            </form>
        </div>
    );
}