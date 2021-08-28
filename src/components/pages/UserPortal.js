import React from 'react';
import UserCard from '../userComponents/UserCard';
import Post from '../userComponents/Post';

const UserPortal = () => {

    return (
        <div className="container user-dashboard">
            <UserCard />
            <Post />
        </div>
    )
}

export default UserPortal
