import React from 'react';

const UserItem = ({ user }) => {
    return (
        <div className="UserItem">
            <p>{user.name}</p>
        </div>
    );
};

export default UserItem;
