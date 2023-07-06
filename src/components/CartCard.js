import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CartCard = ({ product, onRemoveFromCart }) => {
    const { id, name, price, image, description } = product;

    const handleRemoveFromCart = () => {
        onRemoveFromCart(product);
    };

    return (
        <Card>
            <CardMedia component="img" height="140" image={image} alt={name} />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ID: {id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Button variant="contained" color="secondary" onClick={handleRemoveFromCart}>
                    Remove
                </Button>
            </CardContent>
        </Card>
    );
};

export default CartCard;
