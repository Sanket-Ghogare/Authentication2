import React, { useState } from 'react'
import './style.css'
import axios from 'axios'


function Login() {
    const[values, setValues]=useState({
        email:'',
        password:''
    })

    const [error,setError] = useState('')

    const handleSubmit =(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8081/login',values)
        .then(res => {
            console.log(res["data"],typeof(res));
           if(res["data"]["Status"] === 'Success'){
            console.log("true");
                

            }else{
                return res.json(res.data.Error);

            }
        })
        .catch(err => console.log(err));
    }
  return (
    <div className ='d-flex justify-content-center align-items-center vh-100 loginpage'>
    <div className='bg-white p-3 rounded w-25 border'>
        <div className='text-danger'>
            {error && error}
        </div>
        <h2>Login</h2>
        <form onSubmit ={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter the Email' name ='email'
                onChange={e =>setValues({...values, email:e.target.value})} className='form-control rounded-0' autocomplte='off'/>

            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter the Password' name ='PassWord'
                onChange={e =>setValues({...values, password:e.target.value})}className='form-control rounded-0'/>

            </div>
            <button type ='submit' className='btn btn-success w-100 rounded-0'>Log In</button>
            <p>You are agree to our terms and policies</p>
            

        </form>

    </div>
</div>
  )
}

export default Login