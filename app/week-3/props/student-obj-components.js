

export default function StudentObjComp({studentObj}){

    let {
        studentName:name, 
        studentAge:age, 
        address:{city,province}
    } = studentObj

    return(
        <div className="inline-block border border-pink-500 bg-purple-400 mt-5 mb-10  mx-6 px-5 py-4">
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>{city},{province}</p>
        </div>
    );
}