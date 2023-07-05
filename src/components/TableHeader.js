import React from 'react';
import { TableRow, TableCell, TableHead } from '@mui/material';
import './TableHeader.css';

const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Number</TableCell>
                <TableCell>Email</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
