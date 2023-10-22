import React, {useEffect, useState} from 'react';
import Hero from "../components/Hero";
import {fetchUrl} from "../api/http";
import ProductsPage from "./ProductsPage";
import FeaturedProducts from "../components/FeaturedProducts";
interface Product {
    attributes: {
        category: string;
        colors: string[];
        company: string;
        createdAt: string;
        description: string;
        featured: boolean;
        image: string;
        price: string;
        publishedAt: string;
        shipping: boolean;
        title: string;
        updatedAt: string;
    };
    id: number;
}



export const loader = async () :Promise<Product> =>{
    const response = await fetchUrl('/products?featured=true')
    console.log(response.data.data) //backend adds another data array...
    return response.data.data

}

const LandingPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loader().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <Hero />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <FeaturedProducts  />
            )}
        </>
    );
};


export default LandingPage;