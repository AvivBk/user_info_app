import React from 'react';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart }) => {
    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <ProductItem product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
