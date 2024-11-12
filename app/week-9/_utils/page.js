"use client"

import { useUserAuth } from "./auth-context";

export default function Page(){
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    return(
        <div>
            <h1>Week 9</h1>
            <p>{user ? "Helarp" : "Please sign in"}</p>
            {user && user.displayName}
            <p>
                {user ? (
                    <button onClick={firebaseSignOut}>Sign Out</button>
                ) : (
                    <button onClick={gitHubSignIn}>Sign In with Github</button>
                )}
            </p>
        </div>
    )







}