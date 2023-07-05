import React from 'react';
import { TableRow, TableCell, TableBody } from '@mui/material';
import './CustomTableBody.css';

const CustomTableBody = ({ users }) => {
    return (
        <TableBody>
            {users.map((user) => (
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
