import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ProductList from './ProductList';
import Cart from './Cart';

const Store = () => {
    const [cartItems, setCartItems] = useState([]);

    // Generate the products data
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            image: 'product1.jpg',
            description: 'Product 1 description',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20,
            image: 'product2.jpg',
            description: 'Product 2 description',
        },
    ];

    const handleAddToCart = (product) => {
        const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            const newItem = { ...product, quantity: 1 };
            setCartItems((prevItems) => [...prevItems, newItem]);
        }
    };

    const handleRemoveFromCart = (updatedCartItems) => {
        setCartItems(updatedCartItems);
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
