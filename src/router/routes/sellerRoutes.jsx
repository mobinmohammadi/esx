import { lazy } from 'react';
const Home = lazy(() => import('../../views/Home'))
const SellerDashboard = lazy(() => import('../../views/sellers/SellerDashboard'))
const AddProduct = lazy(() => import('../../views/sellers/AddProducts'))



export const SellerRoutes = [
    {
        path : '/',
        element : <Home/>,
        ability : ["admin","seller"]
    },
       {
        path : '/seller/dashboard',
        element : <SellerDashboard/>,
        ability : ["seller"]
    },
           {
        path : '/seller/add-product',
        element : <AddProduct/>,
        ability : ["seller"]
    },
]