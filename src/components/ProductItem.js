import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductItem = ({ product, onAddToCart }) => {
    const { id, name, price, image, description } = product;

    const handleAddToCart = () => {
        onAddToCart(product);
    };

    return (
        <Card>
            <CardMedia component="img" height="140" image={image} alt={name} />
            <CardContent>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Price: ${price}
                </Typography>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <Button variant="contained" color="primary" onClick={handleAddToCart}>
                Add to Cart
            </Button>
        </Card>
    );
};

export default ProductItem;
