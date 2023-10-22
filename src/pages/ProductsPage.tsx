import React from 'react';
import Filters from "../components/Filters";
import ProductsContainer from "../components/ProductsContainer";
import PaginationContainer from "../components/PaginationContainer";
import {fetchUrl} from "../api/http";

const url = '/products'
export const loader = async ()=>{
    const response = await fetchUrl(url)
    const products = response.data.data
    const meta = response.data.meta

    return products

}
const ProductsPage = () => {
    return (
        <>
            <Filters/>
            <ProductsContainer  />
            <PaginationContainer/>
        </>
    );
};

export default ProductsPage;