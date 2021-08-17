import React, { useRef, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password must match');
        } else if (passwordRef.current.value.length < 6) {
            return setError('Password must be at least 6 charcters');
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError('Failed to create account')
            setLoading(false)
        }

        
    }
    return (
        <div className="wrapper">
            {error && <Alert variant="danger">{ error }</Alert>}
            <div className="form-container">
                <form className="form" id="createAccountForm" onSubmit={handleSubmit}>
                    <h1 className="form-title">Register Account</h1>
                    <div className="input-group">
                        <input type="text" className="form-input"  placeholder="Email Address" ref={ emailRef } required/>
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-input"  placeholder="Password" ref={ passwordRef } required/>
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-input"  placeholder="Confirm password" ref={ passwordConfirmRef } required/>
                    </div>
                    <Button className="btn form-btn" type="submit" disabled={ loading }>Continue</Button>
                    <p className="form-text">
                        <Link to='/login' className="form-url" id="linkLogin">Already have an account? Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
