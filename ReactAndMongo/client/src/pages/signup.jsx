import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password) {
            axios.post('http://localhost:3001/register', { name, email, password })
                .then(result => {
                    if (result.data === "User with this email already exists") {
                        setError(result.data);
                    } else {
                        console.log(result);
                        navigate('/');
                    }
                })
                .catch(err => console.log(err));
        } else {
            alert("Please fill out all fields");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                    <label className="form-label" htmlFor="form2Example1">Name</label>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
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
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Create</button>
                <div className="text-center">
                    <Link to="/"><p>Already have an account?</p></Link>
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
}

export default Signup;
