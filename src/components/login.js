import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    const [credentials,setCredentials] = useState({email:'',password:''});

    const [error,setError] = useState('')

   

    

  

    const handleClick = async (e)=>{
        e.preventDefault();
        
        const response = await fetch('/api/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',           
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password}),
        });



        const json = await response.json();

        if(json.success)
        {
            // save the auth token and redirect 
            localStorage.setItem('token',json.authToken);
            navigate('/');
          
         
            
        }
        else {
            setError('Error in Logging in , try again');

            setTimeout(()=>{
              setError('')
            },3000)
            
        }
        
    }

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
  }

  return (
    <div className='my-5 container'>
      
        <h3>Login below to continue </h3>
        
    {/* add the form here which is login form for email and password using bootstrap  */}
    <form onSubmit={handleClick}>
  <div className="my-3 form-group">
    <label htmlFor="email">Email address</label>
    <input onChange={onChange} type="email" className="form-control" name="email" id="email" required aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <div className="my-3 form-group">
    <label htmlFor="password">Password</label>
    <input onChange={onChange} type="password" name='password' className="form-control" required placeholder="Password" />
  </div>

  {error && <p style={{color:"red",fontWeight:'bold'}}> {error} </p>}
  
  <button  type="submit" className="my-3 btn btn-primary">Login</button>
</form>

    </div>
  )
}

export default Login