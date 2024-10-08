import StudentComp from "./student-component";
import StudentObjComp from "./student-obj-components";

export default function PropsPage(){

    let studentOne = {
        studentName: "Baljot",
        studentAge: 19,
        hasGraduated: false,
        schedule: ["CPRG123","CPRG456","CPRG789","CPRG306"],
        address:{
            line1: "123 Main St.",
            city: "Calgary",
            province: "AB",
        },
    };

    let studentTwo = {
        studentName:"Alice",
        studentAge: 21,
        address:{
            city: "Edmonton",
            province:"AB"
        }
    }
    return(
        <main>
            <StudentComp sName="Evil Baljot" sAge="91" sCity="Lethbridge" sProvince="AB"/>
            <StudentComp 
                sName = {studentOne.studentName}
                sAge = {studentOne.studentAge}
                sCity={studentOne.address.city}
                sProvince={studentOne.address.province}
            />

            <StudentObjComp studentObj = {studentOne}/>
            <StudentObjComp studentObj={studentTwo}/>
        </main>
    );
}