import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './UserCardCollection.css';

// UserCard component to display a single user card
const UserCard = ({ user }) => (
    <Card className="user-card">
        <CardMedia component="img" height="140" image={user.photo} alt={user.name} />
        <CardContent>
            <Typography variant="h5" component="div">
                {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ID: {user.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Number: {user.number}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Email: {user.email}
            </Typography>
        </CardContent>
    </Card>
);

const UserCardCollection = ({ users }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [userCards, setUserCards] = useState(users.map((user, index) => ({ id: index, ...user })));

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return; // No valid drop destination
        }

        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;

        if (sourceIndex === destinationIndex) {
            return; // Item dropped in the same position
        }

        // Create a new user card based on the dropped item
        const droppedUser = userCards[sourceIndex];
        const newUserCard = { id: Date.now(), ...droppedUser };

        // Update the user cards array with the new card
        const updatedUserCards = [...userCards];
        updatedUserCards.splice(destinationIndex, 0, newUserCard);

        setUserCards(updatedUserCards);

        // Update the current page to the newly created card
        setCurrentPage(destinationIndex);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="userCardCollection">
                {(provided) => (
                    <Box className="user-card-collection" ref={provided.innerRef} {...provided.droppableProps}>
                        <h2>User Card</h2>
                        {userCards.length > 0 ? (
                            userCards.map((user, index) => (
                                <UserCard key={user.id} user={user} />
                            ))
                        ) : (
                            <p>No user available</p>
                        )}
                        <Button variant="outlined" onClick={handlePreviousPage} disabled={currentPage === 0}>
                            Previous
                        </Button>
                        <Button variant="outlined" onClick={handleNextPage} disabled={currentPage === userCards.length - 1}>
                            Next
                        </Button>
                        {provided.placeholder}
                    </Box>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default UserCard;
