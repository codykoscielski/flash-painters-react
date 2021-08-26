import React, { useRef, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const UpdateProfile = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // const history = useHistory();

    // // const handleSubmit = async (e) => {
    // //     e.preventDefault();

    // //     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    // //         return setError('Password must match');
    // //     } else if (passwordRef.current.value.length < 6) {
    // //         return setError('Password must be at least 6 charcters');
    // //     }

    // //     try {
    // //         setError('')
    // //         setLoading(true)
    // //         await signup(emailRef.current.value, passwordRef.current.value);
    // //         history.push('/userportal')
    // //     } catch {
    // //         setError('Failed to create account')
    // //         setLoading(false)
    // //     }

        
    // // }
    return (
        <div className="wrapper">
            {error && <Alert variant="danger">{ error }</Alert>}
            <div className="form-container">
                <form className="form" id="createAccountForm" >
                    <h1 className="form-title">Update Profile</h1>
                    <div className="input-group">
                        <input type="email" className="form-input"  placeholder="Email Address" ref={ emailRef } defaultValue={ currentUser.email } />
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-input"  placeholder="Leave blank if not needed" ref={ passwordRef } required/>
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-input"  placeholder="Leave blank if not needed" ref={ passwordConfirmRef } required/>
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

export default UpdateProfile;
