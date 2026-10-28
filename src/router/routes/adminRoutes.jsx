import { lazy } from "react"
import DetailsOrder from "../../views/admin/DetailsOrder"
import ProfileSettings from "../../views/sellers/ProfileSettings"


const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"))
const LiveChat = lazy(() => import("../../views/admin/LiveChat"))
const AdminOrders = lazy(() => import("../../views/admin/AdminOrders"))
const Sellers = lazy(() => import("../../views/admin/Sellers"))
const Category = lazy(() => import("../../views/admin/Category"))
const PaymentRequest = lazy(() => import("./../../views/admin/PaymentRequset"))
const SellerRequset = lazy(() => import("./../../views/admin/SellerRequset"))
const DeactiveSellers = lazy(() => import("./../../views/admin/DeactiveSellers"))
const SellerDetails = lazy(() => import("./../../views/admin/SellerDetails"))


export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard />,
        role: "admin"
    },
    {
        path: 'admin/dashboard/orders',
        element: <AdminOrders />,
        role: "admin"
    },
    {
        path: 'admin/dashboard/category',
        element: <Category />,
        role: "admin"
    },
    {
        path: 'admin/dashboard/sellers',
        element: <Sellers />,
        role: "admin"
    },
    {
        path: '/admin/dashboard/payment-requset',
        element: <PaymentRequest />,
        role: "admin"
    },
    {
        path: '/admin/dashboard/deactive-sellers',
        element: <DeactiveSellers />,
        role: "admin"
    },
    {
        path: '/admin/dashboard/Sellers-Request',
        element: <SellerRequset />,
        role: "admin"
    },
    
      {
        path: '/admin/dashboard/Sellers-Details/:sellerid',
        element: <SellerDetails />,
        role: "admin"
    },
         {
        path: '/admin/dashboard/Live-Chat',
        element: <LiveChat />,
        role: "admin"
    },
         {
        path: '/admin/dashboard/profile-setting',
        element: <ProfileSettings />,
        role: "admin"
    },
    



]
