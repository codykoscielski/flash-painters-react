import React from 'react'
import { Alert, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {

    // const emailRef = useRef();
    // const passwordRef = useRef();
    // const { signup } = useAuth();
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //         return setError('Password must match');
    //     } else if (passwordRef.current.value.length < 6) {
    //         return setError('Password must be at least 6 charcters');
    //     }

    //     try {
    //         setError('')
    //         setLoading(true)
    //         await signup(emailRef.current.value, passwordRef.current.value);
    //     } catch {
    //         setError('Failed to create account')
    //         setLoading(false)
    //     }

        
    // }

    return (
        <div className="wrapper">
            <div className="form-container">
                <form className="form" id="login">
                    <h1 className="form-title">Login</h1>
                    <div className="form-message form-error"></div>
                    <div className="input-group">
                        <input type="text" className="form-input" autofocus placeholder="Username email" /> 
                        <div className="input-group"></div>
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-input" autofocus placeholder="Password" />
                        <div class="form-input-errormessage"></div>
                    </div>
                    <Button className="btn form-btn" type="button">login</Button>
                    <p className="form-text">
                        <a href="#" className="form-link">Forgot your password?</a>
                    </p>
                    <p className="form-text">
                        <a className="form-url" href="#" id="createAccount">Don't have an account? Create account</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
