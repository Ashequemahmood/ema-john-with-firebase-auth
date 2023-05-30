import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const {logInUser} = useContext(AuthContext);
    
    const handleLogIn = (e)=>{

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
        })
        .catch(error=>{
            console.log(error)
            setError(error.message);
        })
    }
    return (
        
        <div className="form-container">
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                   
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-John? <Link to ='/sign-up'>Sign Up</Link></small></p>
            
        </div>
        
    );
};

export default Login;