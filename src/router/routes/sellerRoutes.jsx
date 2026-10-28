import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));
const AllProducts = lazy(() => import("../../views/sellers/AllProducts"));
const SellerDashboard = lazy(
  () => import("../../views/sellers/SellerDashboard"),
);
const AddProduct = lazy(() => import("../../views/sellers/AddProducts"));
const DiscountProduct = lazy(
  () => import("../../views/sellers/DiscountProduct"),
);
const Orders = lazy(() => import("../../views/sellers/Orders"));
const Payments = lazy(() => import("../../views/sellers/Payments"));
const ChatToCustomer = lazy(() => import("../../views/sellers/ChatToCustomer"));
const ChatToAdmin = lazy(() => import("../../views/sellers/ChatToAdmin"));
const ProfileSettings = lazy(
  () => import("../../views/sellers/ProfileSettings"),
);
const EditProduct = lazy(() => import("../../views/sellers/EditProduct"));
const OrderDetails = lazy(() => import("../../views/sellers/OrderDetails"));
const Pending = lazy(() => import("../../views/Pending"));
const Deactive = lazy(() => import("../../views/Deactive"));

export const SellerRoutes = [
  {
    path: "/seller/account-pending",
    element: <Pending />,
    ability: "seller",
  },
  {
    path: "/seller/account-deactive",
    element: <Deactive />,
    ability: "seller",
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/all-product",
    element: <AllProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-product",
    element: <DiscountProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    visibility: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <ChatToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer/:customerID",
    element: <ChatToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-admin",
    element: <ChatToAdmin />,
    role: "seller",
    visibility: ["active", "deactive", "pending"],
  },
  {
    path: "/seller/dashboard/profile-setting",
    element: <ProfileSettings />,
    visbility: ["active", "deactive", "pending"],
  },
  {
    path: "/seller/dashboard/edit-product/:ProductID",
    element: <EditProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/order-details/:OrderID",
    element: <OrderDetails />,
    role: "seller",
    visibility: ["active", "deactive"],
  },
];
