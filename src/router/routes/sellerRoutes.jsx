import { lazy } from 'react';
import AllProducts from '../../views/sellers/AllProducts';
const Home = lazy(() => import('../../views/Home'))
const SellerDashboard = lazy(() => import('../../views/sellers/SellerDashboard'))
const AddProduct = lazy(() => import('../../views/sellers/AddProducts'))
import DiscountProduct from './../../views/sellers/DiscountProduct';
import Orders from '../../views/sellers/Orders';



export const SellerRoutes = [
    {
        path: '/',
        element: <Home />,
        ability: ["admin", "seller"]
    },
    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        ability: ["seller"]
    },
    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        ability: ["seller"]
    },
    {
        path: '/seller/dashboard/all-product',
        element: <AllProducts />,
        ability: ["seller"]
    }, {
        path: '/seller/dashboard/discount-product',
        element: <DiscountProduct />,
        ability: ["seller"]
    },
    {
        path: '/seller/dashboard/orders',
        element: <Orders />,
        ability: ["seller"]
    },
]