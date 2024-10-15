"use client"
import {useState} from "react"
import RegistrationForm from "./managed-form";

export default function RegistrationPage(){

const [showForm, setShowForm] = useState(false);

const toggleForm = () =>{
    if(showForm == true){
        setShowForm(false);
    }
    else{
        setShowForm(true)
    }
}

const toggleForm2 = () => showForm ? setShowForm(false) : setShowForm(true);
return(
    <main className="p-5">
        <h1 className="text-3x1 text-center mb-3"> Registration</h1>
        <button onClick={toggleForm2}>Toggle Form</button>
        {showForm && <RegistrationForm/>}
    </main>
)

}