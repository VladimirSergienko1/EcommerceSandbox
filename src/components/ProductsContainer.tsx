import React from 'react';
import ProductsGrid from "./ProductsGrid";
import Filters from "./Filters";
import ProductsList from "./ProductsList";
import {useLoaderData} from "react-router-dom";

const ProductsContainer = () => {
    // @ts-ignore
    const {meta} = useLoaderData()
    console.log('Meta',meta)

    return (
        <>
            <ProductsList/>
            <ProductsGrid/>

        </>
    );
};

export default ProductsContainer;