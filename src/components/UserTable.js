import React, { useState } from 'react';
import TableHeader from './TableHeader';
import CustomTableBody from './CustomTableBody';

const UserTable = ({ users }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
            <table>
                <TableHeader />
                <CustomTableBody users={users} searchTerm={searchTerm} />
            </table>
        </div>
    );
};

export default UserTable;
