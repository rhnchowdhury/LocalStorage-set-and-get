import React from 'react';
import './ProductDetail.css';
import { addToDb, removeFromDb } from '../../utility/FakeDb';


const ProductDetail = ({ product }) => {

    const { title, price, id } = product;

    const addToCart = (_id) => {
        addToDb(_id);
    };

    const removeItem = id => {
        removeFromDb(id);
    }


    return (
        <div className='product'>
            <h3>Product Name: {title}</h3>
            <h5>Price: {price}</h5>
            <h6>ID: {id}</h6>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeItem(id)} className='remove'>Remove Item</button>
        </div>
    );
};

export default ProductDetail;