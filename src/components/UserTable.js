import React from 'react';
import TableHeader from './TableHeader';
import CustomTableBody from './CustomTableBody';




const UserTable = ({ users }) => {
    return (
        <table>
            <TableHeader />
            <CustomTableBody users={users} />
        </table>
    );
};

export default UserTable;
