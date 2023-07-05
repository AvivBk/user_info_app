import React, { useEffect, useState } from 'react';
import UserTable from './components/UserTable';

import './App.css';
import './styles.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
 

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3002/users');
            const data = await response.json();
            setUsers(data.users);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    

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
        </div>
    );
};

export default App;
