import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import CartCard from './CartCard';

const Cart = ({ cartItems, onRemoveFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleRemoveFromCart = (product) => {
        onRemoveFromCart(product);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="div">
                    My Cart
                </Typography>
            </Grid>
            {cartItems.map((item) => (
                <Grid item xs={12} key={item.id}>
                    <CartCard product={item} onRemoveFromCart={handleRemoveFromCart} />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Typography variant="body1" color="text.secondary">
                    Total Price: ${totalPrice}
                </Typography>
                <Button variant="contained" color="primary">
                    Checkout
                </Button>
            </Grid>
        </Grid>
    );
};

export default Cart;
