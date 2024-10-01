

export default function FunctionsPage(){

function helloWorld(username,dayOfWeek){
    //return "Hello World! Welcome back " + username + ", today is " + dayOfWeek;
    return `Hello World! Welcome back ${username}, today is ${dayOfWeek}`

}


const helloWorld2 = (username, dayOfWeek) => {
    return `Hello World! Welcome back ${username}, today is ${dayOfWeek}`
}
// quick way to make function
const helloWorld3 = (username) => `Hello World ${username}`

const helloMath = (a,b) => `${a} + ${b} = ${a + b}`;

//invoked function or using a function into a function
const louder = (textFunc, username) => {
    let thisText = textFunc(username);
    return thisText.toUpperCase();

}
//defining a function within a function
const multiplyBy = (num1) => {
return (num2) => num1 * num2;
}
//value in this function is num 1 whereas the value in the p tag is num 2
const multiplyBy3 = multiplyBy(3);
const multiplyBy10 = multiplyBy(10);

return (
    <main>
        <h1>Functions</h1>
        <p>{helloWorld("Alice","Friday")}</p>
        <p>{helloWorld2("Jeremy","Wednesday")}</p>
        <p>{helloWorld3("Mmfg")}</p>
        <p>{helloMath(3,4)}</p>
        <p>{louder(helloWorld3, "America yaaa, hallo, hallo, hallo" )}</p>
        <p>{louder(helloWorld2,"Osaka")}</p>
        <p>{multiplyBy3(7)}</p>
        <p>{multiplyBy10(7)}</p>
    </main>
)

}