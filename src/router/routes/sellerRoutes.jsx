import { lazy } from 'react';
import AllProducts from '../../views/sellers/AllProducts';
const Home = lazy(() => import('../../views/Home'))
const SellerDashboard = lazy(() => import('../../views/sellers/SellerDashboard'))
const AddProduct = lazy(() => import('../../views/sellers/AddProducts'))
import DiscountProduct from './../../views/sellers/DiscountProduct';
import Orders from '../../views/sellers/Orders';
import Payments from '../../views/sellers/Payments';
import ChatToCustomer from '../../views/sellers/ChatToCustomer';
import ChatToAdmin from '../../views/sellers/ChatToAdmin';
import ProfileSettings from '../../views/sellers/ProfileSettings';



export const SellerRoutes = [
    {
        path: '/',
        element: <Home />,
        ability: ["admin", "seller"]
    },
    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        role: "seller",
        status: 'active'
    },
    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        role: "seller",
        status: 'active'
    },
    {
        path: '/seller/dashboard/all-product',
        element: <AllProducts />,
        role: "seller",
        status: 'active'
    },
    {
        path: '/seller/dashboard/discount-product',
        element: <DiscountProduct />,
        role: "seller",
        status: 'active'
    },
    {
        path: '/seller/dashboard/orders',
        element: <Orders />,
        ability: ["active", "deactive"]
    },
    {
        path: '/seller/dashboard/payments',
        element: <Payments />,
        role: "seller",
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-customer',
        element: <ChatToCustomer />,
        role: "seller",
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-customer/:customerID',
        element: <ChatToCustomer />,
        role: "seller",
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-admin',
        element: <ChatToAdmin />,
        ability: ["active", "deactive", 'pending']
    },
    {
        path: '/seller/dashboard/profile-setting',
        element: <ProfileSettings />,
        ability: ["active", "deactive", 'pending']
    },



]