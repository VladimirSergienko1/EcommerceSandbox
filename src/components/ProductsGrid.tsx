import {Link, useLoaderData} from 'react-router-dom';
import React from 'react';


interface ProductAttributes {
    title: string;
    price: number;
    image: string;
}

interface Product {
    id: React.Key;
    attributes: ProductAttributes;
}
const ProductsGrid = () => {
    const {products} = useLoaderData();
    console.log('Grid',products)
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(Number((price / 100).toFixed(2)));
    };

    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((product) => {
                const { title, price, image } = product.attributes;
                const dollarsAmount = formatPrice(price);
                return (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className='card bg-base-300 w-full shadow-xl hover:shadow-2xl transition duration-300'
                    >
                        <figure className='px-4 pt-4'>
                            <img
                                src={image}
                                alt={title}
                                className='rounded-xl h-64 md:h-48 w-full object-cover'
                            />
                        </figure>
                        <div className='card-body items-center text-center'>
                            <h2 className='card-title capitalize tracking-wider'>{title}</h2>
                            <span className='text-primary text-2xl'>{dollarsAmount}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};
export default ProductsGrid;
