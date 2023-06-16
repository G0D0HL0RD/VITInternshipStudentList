import React from 'react'
import Axios from 'axios';
function StudentTableRow(props) {
    
    //object destruction to make it easily accessible
    // eslint-disable-next-line no-unused-vars
    const{_id,name,email,rollno}=props.obj; //id,name,email,rollno
  
    const handleDelete = ()=>{
        //concatenating id with the url(http request)
        const url = "http://localhost:4500/student/delete-student/"+_id;//id included to delete record according to ID not all records
        Axios.delete(url)
        .then((res)=>{
            if(res.status===200){
                alert("Record deleted successfully");
                window.location.reload();//to reload the window once deleted the command;
            }
            else{
                Promise.reject();
            }
        }).catch((err)=>alert(err))
    }
    return (
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{rollno}</td>
        <td>
            {/* to get id in url we use template literals - using backticks when writing js code inside a string */}
            {/* this _id is the props object which we got above from the parent component so it is a javascript code */}
            <a href={`./edit-student/${_id}`}><button className='btn btn-sm btn-success m-1'>Edit</button></a>
            <button onClick={handleDelete} className='btn btn-sm btn-danger m-1'>Delete</button>
        </td>
    </tr>
  )
}

export default StudentTableRow;
