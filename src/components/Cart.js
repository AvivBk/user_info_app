import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import CartCard from './CartCard';

const Cart = ({ cartItems, onRemoveFromCart }) => {
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleRemoveItem = (product) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
        onRemoveFromCart(updatedCartItems);
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
                    <CartCard product={item} onRemoveFromCart={handleRemoveItem} />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Typography variant="body1" color="text.secondary">
                    Total Price: ${calculateTotalPrice().toFixed(2)}
                </Typography>
                <Button variant="contained" color="primary">
                    Checkout
                </Button>
            </Grid>
        </Grid>
    );
};

export default Cart;
