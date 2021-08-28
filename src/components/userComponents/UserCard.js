import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const UserCard = () => {

    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    
    const handleLogout = async () => {
        setError('');

        try {
            await logout();
            history.pushState('/login');
        } catch {
            setError('Failed to log out');
        }
    }

    return (
        <div className="user-profile-card">
            {error && <Alert variant="danger">{ error }</Alert>}
            <div className="img-background">
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/flash-painters.appspot.com/o/IMG_1623.JPG?alt=media&token=4739b253-5182-4dca-99bb-5aa36fceb30e"
                    className="profile-image"
                /> 
            </div>
            <div className="mid-section">
                <h3>{ currentUser.displayName }</h3>
                <p>Email: { currentUser.email }</p>
                <div className="w-100 mt-2 d-flex justify-content-evenly">
                    <Button className="btn btn-danger" onClick={ handleLogout }>Log Out</Button>
                    <Link to='/updateprofile' className="btn btn-primary">Update Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default UserCard
