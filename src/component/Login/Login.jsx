import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.config';
import {  getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app)

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef()


    const handleResetPass = () => {
        const email = emailRef.current.value;
        if(!email){
            alert("Please Enter your Email")
            return
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("PLease check your email")
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass)

        signInWithEmailAndPassword(auth, email, pass)
        .then(result => {
            const loggedUser = result.user;
            setSuccess("User Log in Successful");
            setError('');
        })
        .catch(error=>{
            setError(error)
        })
    }

    return (
        <div className='w-25 mx-auto'>
            <h4>Please Log in</h4>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' ref={emailRef} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='pass' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <p>{error}</p>
                <p>{success}</p>
            </Form>
            <h4><small>Forget Password? Please <button className='btn btn-link' onClick={handleResetPass}>Reset</button></small></h4>
        </div>
    );
};

export default Login;