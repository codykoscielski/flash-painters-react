import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
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
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">{currentUser.displayName}</h2>
                {error && <Alert variant="danger">{ error }</Alert>}
                <strong>Email:</strong> {currentUser.email} <br />
                <Link to='/updateprofile' className="btn btn-primary w-100">Update Profile</Link>
            </Card.Body>
            <div className="w-100 text-center mt-2">
                <Button className="btn btn-danger" onClick={ handleLogout }>Log Out</Button>
            </div>
        </Card>
    )
}

export default UserCard
