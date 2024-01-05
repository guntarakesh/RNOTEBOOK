import React from 'react'
import { Link,Outlet, useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate();


    const handleClick = ()=>{
        localStorage.removeItem('token');
        navigate('/login')
        
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a style={{color:'blue',fontWeight:'bold'}} className="navbar-brand" href="/">&#x270d;RNotebook</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About</Link>
                            </li>


                        </ul>
                       {!localStorage.getItem('token') ? <form className="d-flex" role="search">
        
                        
                        <Link className='btn btn-primary mx-2' to='/login' role='button'>Login</Link>
                        <Link className='btn btn-primary mx-2' to='/signup' role='button'>SignUp</Link>
                    
            
        
                                            
                        </form> :  <Link onClick={handleClick} className='btn btn-primary' to='/login' role='button'>Log Out</Link>

}
                    </div>
                </div>
            </nav>
<Outlet/>
        </>
    )
}

export default Navbar