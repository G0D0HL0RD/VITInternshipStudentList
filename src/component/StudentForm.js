import {useState} from 'react';
//This is a child component
function StudentForm(props) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [rollno,setRollno] = useState('');

    const arr=[name,email,rollno];
    const handleClick = ()=>{
        //declaring callback function to send data from this child to parent
        return props.getState(arr);
    }

    return (
        <div>
            <input placeholder="Enter your name" type="text"
                class="form-control mx-auto my-3" style={{maxWidth:"500px"}} onChange={(e)=>setName(e.target.value)} defaultValue={props.nameValue}/>
            <input placeholder="Enter your email" type="email"
                class="form-control mx-auto my-3" style={{maxWidth:"500px"}} onChange={(e)=>setEmail(e.target.value)} defaultValue={props.emailValue}/>
            <input placeholder="Enter your RollNo" type="number"
                class="form-control mx-auto my-3" style={{maxWidth:"500px"}} onChange={(e)=>setRollno(e.target.value)} defaultValue={props.rollnoValue}/>
            <button class=" btn btn-success" type="submit" onClick={handleClick}>{props.btnName}</button>
        </div>
     );
}

export default StudentForm;