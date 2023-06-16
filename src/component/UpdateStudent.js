import React, { useEffect, useState } from 'react'
import StudentForm from './StudentForm'
import Axios  from 'axios';
import Nav from './Nav';
import { useParams } from 'react-router-dom'
function UpdateStudent() {
    const [obj,setObj] = useState({})
    // obj=_id,name,email,rollno;
   const [updatedData,setUpdatedData] = useState([]);
    const {id} = useParams();//to fetch id from url

    const getState = (childData)=>{
        setUpdatedData(childData);
    }

    useEffect(()=>{
        const url = "http://localhost:4500/student/update-student/"+id;
        Axios.get(url)
        .then((res)=>{
            if(res.status===200){
                setObj(res.data);
            }
            else{
                Promise.reject();
            }
        }).catch((err)=>{alert(err)});
    },[]);

    const handleSubmit = ()=>{
        const url="http://localhost:4500/student/update-student/"+id;
        const updatedObj = {name:updatedData[0],email:updatedData[1],rollno:updatedData[2]};
        Axios.put(url,updatedObj)
        .then((res)=>{
            if(res.status===200){
                alert("Successfully updated")
            }
            else{
                Promise.reject();
            }
        }).catch((err)=>{alert(err)});
    };

  return (
    <div>
        <Nav/>
        <h1>Edit page</h1>
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} btnName="Update Student" nameValue={obj.name} emailValue={obj.email} rollnoValue={obj.rollno} />
        </form>
    </div>
    )
}

export default UpdateStudent;
