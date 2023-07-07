import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
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

const UserCardCollection = ({ users, onSelectUser }) => {
    return (
        <Box className="user-card-collection">
            <h2>User Card</h2>
            {users.map((user) => (
                <div key={user.id} className="user-card" onClick={() => onSelectUser(user)}>
                    <UserCard user={user} />
                </div>
            ))}
        </Box>
    );
};

export default UserCardCollection;
