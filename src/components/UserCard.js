import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const UserCard = ({ user }) => {
    return (
        <Card>
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
};


export default UserCard;
