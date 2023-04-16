import React from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app)

const Register = () => {
    const handleEmailChange = (event) => {
        // console.log(event.target.value)
    }
    const handlePasswordBlur = (e) => {
        // console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <h2>
                Register
            </h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name='email' id='email' placeholder='your Email' required/>
                <br />
                <input onBlur={handlePasswordBlur} type="password" name='password' id='password' placeholder='your Password' required />
                <br />
                <input type="submit" value='Register' />
            </form>


        </div>
    );
};

export default Register;