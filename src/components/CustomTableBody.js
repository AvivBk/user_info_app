import React from 'react';
import { TableRow, TableCell, TableBody } from '@mui/material';
import './CustomTableBody.css';

const CustomTableBody = ({ users, searchTerm }) => {
    // Filter the users based on the search term
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <TableBody>
            {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.number}</TableCell>
                    <TableCell>{user.email}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default CustomTableBody;
