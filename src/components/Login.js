import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    //const navigate=useNavigate()
    
    const handleLogin = (e) => {
        e.preventDefault();
        if(email==="")
            alert("Email field cannot be empty")
        else if(password==="")
            alert("Password field cannot be empty")
        else
            alert("Login successfull")
      
    }

    return (
        <>
        <div className="login">
            
            <div className="lodin-div">
            <h2>Login</h2>
            <label>Email</label><br/><br/>
            <input type="email" placeholder="email" className="Form-input"/><br/><br/>
            <label>Password</label><br/><br/>
            <input type="password" placeholder="password" className="Form-input"/><br/><br/>
            <Link to="/form"><button >Login</button><br/><br/></Link>
            </div>
        </div>
        </>
    )
}

export default Login

















































