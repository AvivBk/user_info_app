import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import UserTable from './components/UserTable';
import UserList from './components/UserList';
import UserCardCollection from './components/UserCardCollection';
import { DragDropContext } from 'react-beautiful-dnd';
import Pagination from './components/Pagination';
import Store from './components/Store';
import './App.css';
import './styles.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userCards, setUserCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

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
                setCurrentPage(updatedCards.length - 1); // Set current page to the newly added card
                return updatedCards;
            });
        }
    };

    const isUserInCollection = (user) => {
        return userCards.some((card) => card.id === user.id);
    };

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return; // Dropped outside the list
        }

        const { source, destination } = result;

        if (source.droppableId === 'userList' && destination.droppableId === 'userCardCollection') {
            const draggedUser = users[source.index];
            handleSelectUser(draggedUser);
        }
    };

    const handleNextPage = () => {
        setCurrentPage(1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(0);
    };

    return (
        <div className="App">
            {currentPage === 0 && (
                <>
                    <div>
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
            {currentPage === 1 && <Store />}
            <Pagination
                currentPage={currentPage}
                totalPageCount={2}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
            />
        </div>
    );
};

export default App;
