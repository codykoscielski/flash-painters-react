import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const UserCard = () => {

    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    
    const handleLogout = () => {
        setError('');

        try {
            logout();
            history.pushState('/login');
        } catch {
            setError('Failed to log out');
        }
    }

    return (
        <div className="user-profile-card">
            {error && <Alert variant="danger">{ error }</Alert>}
            <h3>{ currentUser.displayName }</h3>
            <p>Email: { currentUser.email }</p>
            <div className="w-100 mt-2 d-flex justify-content-evenly">
                <Button className="btn btn-danger" onClick={ handleLogout }>Log Out</Button>
                <Link to='/updateprofile' className="btn btn-primary">Update Profile</Link>
            </div>
        </div>
    )
}

export default UserCard
