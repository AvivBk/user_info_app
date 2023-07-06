import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const CartCard = ({ product, onRemoveFromCart }) => {
    const { id, name, price, image, description, quantity } = product;

    const handleRemoveItem = () => {
        onRemoveFromCart(product);
    };

    return (
        <Card>
            <CardMedia component="img" height="140" image={image} alt={name} />
            <CardContent>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Price: ${price}
                </Typography>
                <Typography variant="body2">Quantity: {quantity}</Typography>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <Button variant="contained" color="secondary" onClick={handleRemoveItem}>
                Remove
            </Button>
        </Card>
    );
};

export default CartCard;
