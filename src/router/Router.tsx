import React from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import LandingPage from "../pages/LandingPage";
import ProductsPage from "../pages/ProductsPage";
import SingleProductPage from "../pages/SingleProductPage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import CheckoutPage from "../pages/CheckoutPage";
import OrdersPage from "../pages/OrdersPage";
import ErrorElement from "../components/ErrorElement";
import {loader as landingLoader} from "../pages/LandingPage";
import {loader as singleProductLoader} from "../pages/SingleProductPage"
import {loader as productsLoader} from "../pages/ProductsPage"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element: <LandingPage/>,
                errorElement: <ErrorElement/>,
                loader: landingLoader
            },
            {
                path:'products',
                element: <ProductsPage/>,
                errorElement: <ErrorElement/>,
                loader: productsLoader
            },
            {
                path:'products/:id',
                element: <SingleProductPage/>,
                errorElement: <ErrorElement/>,
                loader: singleProductLoader
            },
            {
                path:'cart',
                element: <CartPage/>
            },
            {
                path:'about',
                element: <AboutPage/>
            },
            {
                path:'checkout',
                element: <CheckoutPage/>
            },
            {
                path:'orders',
                element: <OrdersPage/>
            },
         /*   {
                path: "*",
                element: <ErrorPage/>
            },*/
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>,
        errorElement:<ErrorPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>,
        errorElement:<ErrorPage/>
    }
])

export default routes;