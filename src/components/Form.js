import {useState} from "react"

const Form = () => {

    const [name,setName] = useState("");
    const [email,setEmail]=useState("");

    
 
    const handlechange = () => {
           console.log(name);
           console.log(email)
    }
    
    return (
        <div className="F">
        <form className="Form">
            <br/>
            <label className="Form-label">Name</label><br/><br/>
            <input type="text" placeholder="name" className="Form-input" onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
            <label className="Form-label">Email</label><br/><br/>
            <input type="email" placeholder="email" className="Form-input" onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>

            <button type="submit" className="Form-button" onClick={handlechange}>Add</button><br/><br/>
        </form>
        </div>
    )
}

export default Form