// ProductItem.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import './ProductItem.css';

const ProductItem = ({ product, onAddToCart }) => {
    const { id, name, price, image, description } = product;

    const handleAddToCart = () => {
        const existingProduct = onAddToCart(product);
        if (existingProduct) {
            // Update the quantity of the existing product in the cart
            existingProduct.quantity += 1;
        }
    };

    return (
        <Card className="ProductItemCard">
            <CardMedia component="img" height="140" image={image} alt={name} className="ProductItemCardImage" />
            <CardContent>
                <Typography variant="h6" className="ProductItemCardTitle">
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Price: ${price}
                </Typography>
                <Typography variant="body2" className="ProductItemCardDescription">
                    {description}
                </Typography>
            </CardContent>
            <Button variant="contained" color="primary" onClick={handleAddToCart} className="ProductItemCardButton">
                Add to Cart
            </Button>
        </Card>
    );
};

export default ProductItem;
