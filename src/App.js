// app.js
import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';
import UserTable from './components/UserTable';
import UserList from './components/UserList';
import UserCardCollection from './components/UserCardCollection';
import { DragDropContext } from 'react-beautiful-dnd';
import Store from './components/Store';
import './App.css';
import './styles.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userCards, setUserCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPageCount = 2;

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
            const newUserCard = { id: Date.now(), ...user };
            setUserCards((prevCards) => {
                const updatedCards = [...prevCards, newUserCard];
                setCurrentPage(updatedCards.length);
                return updatedCards;
            });
        }
    };

    const isUserInCollection = (user) => {
        return userCards.some((card) => card.id === user.id);
    };

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const { source, destination } = result;

        if (source.droppableId === 'userList' && destination.droppableId === 'userCardCollection') {
            const draggedUser = users[source.index];
            handleSelectUser(draggedUser);
        }
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="App">
            <div className="Pagination">
                {currentPage > 1 && (
                    <Button variant="contained" color="primary" onClick={handlePreviousPage}>
                        Previous
                    </Button>
                )}
                {currentPage < totalPageCount && (
                    <Button variant="contained" color="primary" onClick={handleNextPage}>
                        Next
                    </Button>
                )}
            </div>

            {currentPage === 1 && (
                <>
                    <div className="AppTitleWrapper">
                        <h1 className="AppTitle">User Table</h1>
                        {loading ? <p>Loading users...</p> : <UserTable users={users} />}
                    </div>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <UserCardCollection
                                users={users}
                                userCards={userCards}
                                currentPage={currentPage}
                                handleNextPage={handleNextPage}
                                handlePreviousPage={handlePreviousPage}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <DragDropContext onDragEnd={handleDragEnd}>
                                <UserList users={users} onSelectUser={handleSelectUser} />
                            </DragDropContext>
                        </Grid>
                    </Grid>
                </>
            )}
            {currentPage === 2 && <Store />}
        </div>
    );
};

export default App;
