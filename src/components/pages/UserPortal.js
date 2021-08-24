import React from 'react';
import UserCard from '../userComponents/UserCard';
import Post from '../userComponents/Post';

const UserPortal = () => {

    return (
        <div className="container wrapper">
            <UserCard />
            <Post />
        </div>
    )
}

export default UserPortal
