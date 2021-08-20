import React, { useState, useRef } from 'react'
import { Alert, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/userportal')
        } catch {
            setError('Failed to login')
            setLoading(false)
        }

        
    }

    return (
        <div className="wrapper">
            {error && <Alert variant="danger">{ error }</Alert>}
            <div className="form-container">
                <form className="form" onSubmit={ handleSubmit }>
                    <h1 className="form-title">Login</h1>
                    <div className="form-message form-error"></div>
                    <div className="input-group">
                        <input type="text" className="form-input" autoFocus placeholder="Username email" ref={ emailRef } /> 
                        <div className="input-group"></div>
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-input" autoFocus placeholder="Password"  ref={ passwordRef } />
                        <div className="form-input-errormessage"></div>
                    </div>
                    <Button className="btn form-btn" type="submit" disabled={ loading }>Continue</Button>
                    <p className="form-text">
                        <Link className="form-url" to="/signup">Don't have an account? Create account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
