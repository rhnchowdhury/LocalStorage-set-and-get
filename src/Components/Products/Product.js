import React, { useEffect, useState } from 'react';
import ProductDetail from '../ProductDetails/ProductDetail';
import './Product.css';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <h1>Shop for boys</h1>
            <div className='div-map'>
                {
                    products.map(product => <ProductDetail product={product} key={product.id}></ProductDetail>)
                }
            </div>
        </div>
    );
};

export default Product;