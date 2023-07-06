import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

const Checkout = ({ totalPrice }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="div">
                    Checkout
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" color="text.secondary">
                    Total Price: ${totalPrice}
                </Typography>
                <Button variant="contained" color="primary">
                    Place Order
                </Button>
            </Grid>
        </Grid>
    );
};

export default Checkout;
