import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const UserCardCollection = ({ users }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const user = users[currentPage];

    return (
        <Box>
            <h2>User Card</h2>
            {user ? (
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
            ) : (
                <p>No user available</p>
            )}
            <Button variant="outlined" onClick={handlePreviousPage} disabled={currentPage === 0}>
                Previous
            </Button>
            <Button variant="outlined" onClick={handleNextPage} disabled={currentPage === users.length - 1}>
                Next
            </Button>
        </Box>
    );
};

export default UserCardCollection;
