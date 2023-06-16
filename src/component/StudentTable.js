import { useEffect,useState } from 'react';
import Axios from'axios';
import Nav from './Nav';
import StudentTableRow from './StudentTableRow';
function StudentTable() {

    const [resData,setResData] = useState([]);
    //hooks provide lifecycle method for function component
    useEffect(()=>{
        const url ="http://localhost:4500/student/";
        Axios.get(url)
        .then((res)=>{
            if(res.status===200){
                setResData(res.data)
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])
    
    const Datatable = ()=>{
        return resData.map((val,ind)=>{
            return <StudentTableRow obj={val} key={ind}/>
        })
    }
    
    return (
        <div>
            <Nav />
            <table className='mx-auto bg-warning table-bordered my-4 table-hover table-stripped'>
                <tr className='bg-success'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>RollNo</th>
                </tr>
                <tbody>
                    {Datatable()}
                </tbody>
            </table>

        </div>
     );
}

export default StudentTable;