import React from 'react';

const Product = ({product}) => {
    return (
        <div className='container'>
            <img src={product.image} alt={product.name} />
            <div>
                <div>
                   <h1>{product.name}</h1>
                   <h1>{product.price}</h1>
                </div>
                <h1>{product.description}</h1>
            </div>
            <div>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;