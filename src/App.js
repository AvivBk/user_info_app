import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import UserTable from './components/UserTable';
import UserList from './components/UserList';
import UserCardCollection from './components/UserCardCollection';
import { DragDropContext } from 'react-beautiful-dnd'; // Import DragDropContext

import './App.css';
import './styles.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cardCollection, setCardCollection] = useState([]);

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

    const handleSelectUser = (user) => {
        if (!isUserInCollection(user)) {
            const updatedCollection = [...cardCollection, user];
            setCardCollection(updatedCollection);
        }
    };

    const isUserInCollection = (user) => {
        return cardCollection.some((collectionUser) => collectionUser.id === user.id);
    };

    const handleDragEnd = (result) => {
        // ... (unchanged code)
    };

    return (
        <div className="App">
            <div>
                <h1 className="AppTitle">User Table</h1>
                {loading ? <p>Loading users...</p> : <UserTable users={users} />}
            </div>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <UserCardCollection users={cardCollection} />
                </Grid>
                <Grid item xs={8}>
                    <DragDropContext onDragEnd={handleDragEnd}> {/* Wrap UserList with DragDropContext */}
                        <UserList users={users} onDragEnd={handleDragEnd} onSelectUser={handleSelectUser} />
                    </DragDropContext>
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
