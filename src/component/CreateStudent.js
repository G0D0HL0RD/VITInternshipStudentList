import StudentForm from "./StudentForm";
// this is a parent component
import { useState } from "react";
import Axios from 'axios';
import Nav from "./Nav";

function CreateStudent() {
    //defining the callback function here
    //getState is the actual callback function
    const getState = (childData)=>{
        setData(childData); //childData[0] childData[1] childData[2]
    }
    const [data,setData]=useState([]);
    const handleSubmit = () => {
        const url = "http://localhost:4500/student/create-student"
        const obj = {name: data[0] ,email: data[1] ,rollno: data[2] }
        Axios.post(url,obj)
            .then((res)=>{
                if(res.status===200){
                    alert("Student Data is created");
                }
                else{
                    Promise.reject();
                }
            })
            .catch((err)=>{alert(err)})
        }

    return (
        <div>
            <Nav />
        <form onSubmit={handleSubmit}>
            {/* here the callback function is passed as prop from parent to child */}
            <StudentForm btnName="Create Student" getState={getState} />
        </form>
        </div>
     );
    
}

export default CreateStudent;