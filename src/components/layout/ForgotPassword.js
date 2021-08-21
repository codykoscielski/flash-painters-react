import React, { useState, useRef } from 'react'
import { Alert, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for instructions!')
        } catch {
            setError('Failed to reset password')
            setLoading(false)
        }

        
    }

    //fake email: basogi8555@kibwot.com

    return (
        <div className="wrapper">
            {error && <Alert variant="danger">{ error }</Alert>}
            {message && <Alert variant="success">{ message }</Alert>}
            <div className="form-container">
                <form className="form" onSubmit={ handleSubmit }>
                    <h1 className="form-title">Reset Password</h1>
                    <div className="form-message form-error"></div>
                    <div className="input-group">
                        <input type="email" className="form-input" autoFocus placeholder="Username email" ref={ emailRef } /> 
                        <div className="input-group"></div>
                    </div>
                    <Button className="btn form-btn" type="submit" disabled={ loading }>Reset Password</Button>
                    <p className="form-text">
                    <Link to='/login' className="form-url" id="linkLogin">Already have an account? Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
