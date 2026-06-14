import { useState } from 'react';
import catalog from "../data/catalog.js";
import ProductCard from "../components/ProductCard.jsx";

function Shop({ }) {

    return (
        <main className='grid grid-cols-3 gap-4'>
            {catalog.map(item => <ProductCard key={item.id} productInfo={item}/>)}
        </main>
    ); 
}

export default Shop;
