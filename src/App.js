import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material'; // Import Grid component
import UserTable from './components/UserTable';
import UserList from './components/UserList';
import UserCardCollection from './components/UserCardCollection';

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
          
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <UserCardCollection users={users} />
                </Grid>
                <Grid item xs={8}>
                    <UserList users={users} onSelectUser={handleSelectUser} />
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
