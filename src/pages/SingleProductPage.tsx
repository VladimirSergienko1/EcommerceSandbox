import React, {useState} from 'react';
import {fetchUrl} from "../api/http";
import {Link, useLoaderData} from "react-router-dom";



interface LoaderData {
    product: {
        attributes: {
            image: string;
            title: string;
            price: string;
            description: string;
            colors: string[];
            company: string;
        };
    };
}

// @ts-ignore
export const loader = async ({params}) =>{
    const response = await fetchUrl(`/products/${params.id}`)
    return {product: response.data.data};

}
const SingleProductPage = () => {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(Number((price / 100).toFixed(2)));
    };

    const data = useLoaderData() as LoaderData;
    const { product } = data;
    console.log('Bla',product)
    const {image,title,price,description,colors,company} = product.attributes
    const dollarsAmount = formatPrice(Number(price))
    const [productColor, setProductColor] = useState(colors[0])
    const [amount, setAmount] = useState(1);

    const handleAmount = (e: { target: { value: string; }; }) => {
        setAmount(parseInt(e.target.value));
    };

    return (
        <section>
            <div className='text-sm breadcrumbs'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </div>
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                <img
                    src={image}
                    alt={title}
                    className='w-96 h-96 object-cover rounded-lg lg:w-full'
                />
                <div>
                    <h1 className='capitalize text-3xl font-bold'>{title}</h1>
                    <h4 className='text-xl text-neutral-content font-bold mt-2'>
                        {company}
                    </h4>
                    <p className='mt-3 text-xl'>{dollarsAmount}</p>
                    <p className='mt-6 text-xl'>{description}</p>
                    <div className='mt-6'>
                        <h4 className='text-xl font-medium tracking-wider capitalize'>
                            colors
                        </h4>
                        <div className='mt-2'>
                            {colors.map((color) => {
                                return (
                                    <button
                                        key={color}
                                        type='button'
                                        className={`badge w-6 h-6 mr-2 ${
                                            color === productColor && 'border-2 border-secondary'
                                        }`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setProductColor(color)}
                                    ></button>
                                );
                            })}
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className='label' htmlFor='amount'>
                                <h4 className='text-md font-medium -tracking-wider capitalize'>
                                    amount
                                </h4>
                            </label>
                            <select
                                className='select select-primary select-bordered select-md'
                                id='amount'
                                value={amount}
                                onChange={handleAmount}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                            <div className='mt-5'>
                                <button className='btn btn-primary btn-md' onClick={()=>console.log('Bag')}>
                                    Add to bag
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SingleProductPage;