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

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element: <LandingPage/>
            },
            {
                path:'products',
                element: <ProductsPage/>
            },
            {
                path:'products/:id',
                element: <SingleProductPage/>
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