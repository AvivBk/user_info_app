import React, { useEffect, useState } from 'react';
import UserTable from './components/UserTable';
import UserList from './components/UserList';
import './App.css';
import './styles.css';
const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3002/users');
            const data = await response.json();
            setUsers(data.users);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="App">
            <div>
                <h1 className="AppTitle">User Table</h1>
                {loading ? (
                    <p>Loading users...</p>
                ) : (
                    <UserTable users={users} />
                )}
            </div>
            <div className="App">
                <h1 className="AppTitle">User List</h1> {/* Updated heading */}
                <UserList users={users} onSelectUser={handleSelectUser} />
            </div>
        </div>
    );
};

export default App;
