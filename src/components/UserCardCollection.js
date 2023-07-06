import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './UserCardCollection.css';

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
    const [userCards, setUserCards] = useState([]);

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
            return;
        }

        const newUserCards = Array.from(userCards);
        const [draggedCard] = newUserCards.splice(source.index, 1);
        newUserCards.splice(destination.index, 0, draggedCard);

        setUserCards(newUserCards);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="userCardCollection">
                {(provided, snapshot) => (
                    <Box className="user-card-collection" {...provided.droppableProps} ref={provided.innerRef}>
                        <h2>User Card</h2>
                        {userCards.length > 0 ? (
                            userCards.map((user, index) => (
                                <Draggable key={user.id.toString()} draggableId={user.id.toString()} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            className="user-card-draggable"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                ...provided.draggableProps.style,
                                                opacity: snapshot.isDragging ? 0.5 : 1,
                                            }}
                                        >
                                            <UserCard user={user} />
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        ) : (
                            <p>No user available</p>
                        )}
                        {provided.placeholder}
                    </Box>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default UserCardCollection;
