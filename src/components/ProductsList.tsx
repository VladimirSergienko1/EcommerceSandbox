import {Link, useLoaderData} from 'react-router-dom';
import React from 'react';


interface ProductAttributes {
    title: string;
    price: number;
    image: string;
    company: string;
}

interface Product {
    id: React.Key;
    attributes: ProductAttributes;
}
const ProductsList = () => {
    const products = useLoaderData() as Product[];
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(Number((price / 100).toFixed(2)));
    };

    return (
        <div className='mt-12 grid gap-y-8 '>
            {products.map((product) => {
                const { title, price, image, company } = product.attributes;
                const dollarsAmount = formatPrice(price);
                return (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className='p-8 bg-base-300  rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap shadow-xl hover:shadow-2xl duration-300 group'
                    >
                        <img
                            src={image}
                            alt={title}
                            className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
                        />
                        <div className='ml-0 sm:ml-16'>
                            <h3 className='capitalize font-medium text-lg'>{title}</h3>
                            <h4 className='capitalize text-md text-neutral font-bold text-2xl'>
                                {company}
                            </h4>
                        </div>
                        <p className='text-primary font-medium mt-10 ml-0 sm:ml-auto text-lg'>
                            {dollarsAmount}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
};
export default ProductsList;
