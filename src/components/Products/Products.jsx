import React from 'react';

import Product from './Product/Product';
const products = [
    {id: 1, name: 'shoes', description: 'Running shoes', price: 'UGX 40,000', image: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc='},
    {id: 2, name: 'MacBook', description: 'Apple MacBook', price: 'UGX 3,000,000', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'}
]
const Products = () => {
    return (
        <div>
            {products.map((product) =>(
               <div key={product.id}>
                    <Product product={product} />
               </div>
            ))}
        </div>
    );
}

export default Products;