import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Signup() {
  const baseUrl = process.env.REACT_APP_BASE_URL_A
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });
  const [error, setError] = useState('')




  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();

    const { name, email, password } = credentials;

    const response = await fetch('/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();

    if (json.success) {

      navigate('/login');

    }
    else {

      setError('Error in Sing Up , Try again ')

      setTimeout(() => {
        setError('')
      }, 3000)

    }

  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className='my-5 container'>
      <h3>Sign Up Below to continue </h3>
      <form onSubmit={handleClick}>
        <div className="my-3 form-group">
          <label htmlFor="name">Name</label>
          <input onChange={onChange} type="text" className="form-control" name="name" id="name" required aria-describedby="emailHelp" placeholder="Enter Name" />
        </div>
        <div className="my-3 form-group">
          <label htmlFor="email">Email address</label>
          <input onChange={onChange} type="email" className="form-control" name="email" id="email" required aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="my-3 form-group">
          <label htmlFor="password">Password</label>
          <input onChange={onChange} type="password" name='password' className="form-control" id='password' required placeholder="Password" />
        </div>
        <div className="my-3 form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input onChange={onChange} type="password" name='cpassword' className="form-control" id='cpassword' required placeholder="Confirm Password" />
        </div>
        <p>{error && <p style={{ color: 'red', fontWeight: 'bold' }}> {error} </p>}</p>
        <button type="submit" className="my-3 btn btn-primary">Sign Up</button>
      </form>

    </div>
  )
}

export default Signup