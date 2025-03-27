import {useEffect, useState} from "react"
import Details from './Details'
import {v4 as uuidv4 } from 'uuid'
import { Link } from "react-router-dom"
const Form = () => {

    const [name,setName] = useState("");
    const [email,setEmail]=useState("");
    const [details,setDetails]=useState([]);

 
    const handlechange = (e) => {
        e.preventDefault();
        const newDetails = {
            id:uuidv4(),
            name,email}
          setDetails([...details,newDetails]);
          
          setName("")
          setEmail("")

    }

    useEffect(()=> {
        if(details.length>0)
        console.log(details);
    },[details])
    
    const handleDelete = (id) => {
        setDetails(details.filter((i)=> i.id!==id))
    }

    return (
        <>
        <div className="F">
        <form className="Form">
            <br/>
            <label className="Form-label">Name</label><br/><br/>
            <input type="text" placeholder="name" value={name} className="Form-input" onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
            <label className="Form-label">Email</label><br/><br/>
            <input type="email" placeholder="email" value={email} className="Form-input" onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>

            <button type="submit" className="Form-button" onClick={handlechange}>Add</button><br/><br/>
            
        </form><br/>
        
        </div>
        <div className="details">
        <Details details={details} handleDelete={handleDelete}/>
        </div>
        </>
    )
}

export default Form