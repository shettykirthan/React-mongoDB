import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
    
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login' , {email , password })
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                navigate('./home')
            }
        })
        
        
        .catch(err => console.lof(err))
        
    }
  return (
    <div>
      <form>
        <div data-mdb-input-init className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
              <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
            </div>
          </div>
          
        </div>

        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>

        <div className="text-center">
          <Link to ="/register"><p>Not a member? Register</p></Link>
          <p>or sign up with:</p>
          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>
          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>
          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
