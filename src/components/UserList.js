import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

const UserList = ({ users, onSelectUser }) => {
    return (
        <div className="UserList">
            <h2>User List</h2>
            {users.map((user) => (
                <div key={user.id} className="UserItem" onClick={() => onSelectUser(user)}>
                    <UserItem user={user} />
                </div>
            ))}
        </div>
    );
};

export default UserList;
