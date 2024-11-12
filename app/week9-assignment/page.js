"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return(
        <div>
            <h1>Week 9 Assignment</h1>
            <p>{user ? "HEY YOU!" : "SIGN IN PLEASE PLEASE PLEASE PLEASE"}</p>
            {user && user.displayName}
            <p>
                {user ? (
                    <button onClick={firebaseSignOut}>Sign Out</button>
                ) : (
                    <button onClick={gitHubSignIn}>Sign In with Github :D</button>
                )}
            </p>
            {user &&(
                <Link href="./week9-assignment/shopping-list">Click me to see your shopping list</Link>
            )}
        </div>
    )


}