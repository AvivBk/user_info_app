import React from 'react';

const UserItem = ({ user, onSelectUser }) => {
    const handleUserClick = () => {
        onSelectUser(user);
    };

    return (
        <div
            className="UserItem"
            onClick={handleUserClick}
            onMouseEnter={() => console.log('Mouse enter')}
            onMouseLeave={() => console.log('Mouse leave')}
        >
            {user.name}
        </div>
    );
};

const UserList = ({ users, onSelectUser }) => {
    return (
        <div>
            <h2>User List</h2>
            {users.map((user) => (
                <UserItem key={user.id} user={user} onSelectUser={onSelectUser} />
            ))}
        </div>
    );
};

export default UserList;
