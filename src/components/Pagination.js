import React from 'react';
import { Button } from '@mui/material';

const Pagination = ({ currentPage, totalPageCount, onNextPage, onPreviousPage }) => {
    return (
        <div className="Pagination">
            {currentPage > 1 && (
                <Button variant="contained" color="primary" onClick={onPreviousPage}>
                    Previous
                </Button>
            )}
            {currentPage < totalPageCount && (
                <Button variant="contained" color="primary" onClick={onNextPage}>
                    Next
                </Button>
            )}
        </div>
    );
};

export default Pagination;
