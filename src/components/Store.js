import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ProductList from './ProductList';
import Cart from './Cart';

const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg', description: 'Product 1 description' },
    { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg', description: 'Product 2 description' },
    // Add more products as needed
];

const Store = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const handleRemoveFromCart = (product) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <ProductList products={products} onAddToCart={handleAddToCart} />
            </Grid>
            <Grid item xs={4}>
                <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
            </Grid>
        </Grid>
    );
};

export default Store;
