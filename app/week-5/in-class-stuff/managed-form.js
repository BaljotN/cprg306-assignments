"use client"
import {useState} from "react";
export default function RegistrationForm(){

const [fullName, setFullName] = useState();
const [email, setEmail] = useState();
const [birthDate, setBirthDate] = useState();
const [subscription,setSubscription] = useState();
const [message,setMessage] = useState();


const handleFullNameChange = (event) =>{
    console.dir(event.target.value);
    setFullName(event.target.value);
}

const handleEmailChange = (event) => setEmail(event.target.value);

const handleBirthDateChange = (event) => setBirthDate(event.target.value);

const handleSubscriptionChange = (event) => setSubscription(event.target.value);

const handleMessageChange = (event) => setMessage(event.target.value);

 const handleSubmit = (event) =>{
        event.preventDefault();
        console.dir(event);

        let regisrationObject = {
            fName :fullName,
            mail: email, 
            bday:birthDate,
            plan:subscription,
            msg:message
        }

         alert(`
            Name: ${regisrationObject.fName} 
            Email: ${regisrationObject.mail} 
            Birth Date: ${regisrationObject.bday} 
            Subscription ${regisrationObject.plan} 
            Message ${regisrationObject.msg} 
                
        `)

        setFullName("");
        setEmail("");
        setBirthDate("");
        setSubscription("");
        setMessage("");

    }

    return(
        <form onSubmit={handleSubmit} className="bg-slate-500 p-5 m-2 text-black">
            <div className="mb-3">
                <label className="inline-block w-40">Full Name:</label>
                <input type="text" 
                onChange={handleFullNameChange} 
                value={fullName}
                className="px-2 py-0.5 rounded border border-teal-400 bg-amber-50 focus:bg-emerald-200" 
                />
                
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Email:</label>
                <input type="email" onChange={handleEmailChange} value={email}
                className="px-2 py-0.5 rounded border border-teal-400 bg-amber-50 focus:bg-emerald-200"/>
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Birth Date:</label>
                <input type="date" onChange={handleBirthDateChange} value={birthDate}
                className="px-2 py-0.5 rounded border border-teal-400 bg-amber-50 focus:bg-emerald-200"/>
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Subscription Type:</label>
                <select onChange={handleSubscriptionChange} value={subscription}
                className="px-2 py-0.5 rounded border border-teal-400 bg-amber-50 focus:bg-emerald-200">
                    <option selected disabled value="">-- Please select a plan --</option>
                    <option value="Free">Free plan</option>
                    <option value="Basic">Basic plan</option>
                    <option value="Premium">Premium plan</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="inline-block w-40 align-top">Message:</label>
                <textarea onChange={handleMessageChange} value={message}
                className="px-2 py-0.5 rounded border border-teal-400 bg-amber-50 focus:bg-emerald-200">

                </textarea>
            </div>
            <div className="mt-2">
                <button className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-700 active:bg-blue-400">Submit Registration</button>
            </div>
        </form>
    );
}