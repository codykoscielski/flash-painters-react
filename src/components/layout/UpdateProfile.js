import React, { useRef, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const UpdateProfile = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleUpdate = (e) => {
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }

        const promises = []
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
        }
      
        Promise.all(promises)
        .then(() => {
            setSuccess('Profile updated!')
        })
        .catch(() => {
            setError("Failed to update account")
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return (
        <div className="wrapper">
            {error && <Alert variant="danger">{ error }</Alert>}
            {success && <Alert variant='success'>{ success }</Alert>}
            <div className="form-container">
                <form className="form" onSubmit={ handleUpdate } >
                    <h1 className="form-title">Update Profile</h1>
                    <div className="input-group">
                        <input type="email" className="form-input"  placeholder="Email Address" ref={ emailRef } defaultValue={ currentUser.email } />
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-input"   ref={ passwordRef }/>
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-input"   ref={ passwordConfirmRef }/>
                    </div>
                    <Button className="btn form-btn" type="submit" disabled={ loading }>Continue</Button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile;
