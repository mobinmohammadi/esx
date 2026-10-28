    import { RxDashboard } from "react-icons/rx";
    import { SlBasket } from "react-icons/sl";
    import { BiCategoryAlt } from "react-icons/bi";
    import { FaUsers } from "react-icons/fa";
    import { MdPayment } from "react-icons/md";
    import { FaUserTimes } from "react-icons/fa";
    import { IoGitPullRequest } from "react-icons/io5";
    import { IoIosChatbubbles, IoMdAdd } from "react-icons/io";
    import { CiDiscount1 } from "react-icons/ci";
    import { FaCartArrowDown } from "react-icons/fa";
    import { MdOutlinePayment } from "react-icons/md";
    import { IoChatbubblesOutline } from "react-icons/io5";
    import { RiShoppingCartFill } from "react-icons/ri";
    import { IoChatbubblesSharp } from "react-icons/io5";

    import { FaUserCircle } from "react-icons/fa";















    export const allNav = [
        {
            id: 1,
            title: 'Dashboard',
            icons: <RxDashboard />,
            role: 'admin',
            path: "/admin/dashboard"

        },
        {
            id: 2,
            title: 'orders',
            icons: <SlBasket />,
            role: 'admin',
            path: "/admin/dashboard/orders",

        },
        {
            id: 3,
            title: 'Category',
            icons: <BiCategoryAlt />,
            role: 'admin',
            path: "/admin/dashboard/category"

        },
        {
            id: 4,
            title: 'Sellers',
            icons: <FaUsers />,
            role: 'admin',
            path: "/admin/dashboard/sellers"

        },
        {
            id: 5,
            title: 'Payment Request',
            icons: <MdPayment />,
            role: 'admin',
            path: "/admin/dashboard/payment-requset"

        },
        {
            id: 6,
            title: 'Deactive Sellers',
            icons: <FaUserTimes />,
            role: 'admin',
            path: "/admin/dashboard/deactive-sellers"

        },
        {
            id: 7,
            title: 'Sellers Request',
            icons: <IoGitPullRequest />,
            role: 'admin',
            path: "/admin/dashboard/Sellers-Request"

        },
        {
            id: 8,
            title: 'Live Chat',
            icons: <IoIosChatbubbles />,
            role: 'admin',
            path: "/admin/dashboard/Live-Chat"

        },
        {
            id: 9,
            title: 'Dashboard',
            icons: <RxDashboard />,
            role: 'seller',
            path: "/seller/dashboard"

        },
        {
            id: 10,
            title: 'Add Product',
            icons: <IoMdAdd />,
            role: 'seller',
            path: "/seller/dashboard/add-product"

        },
        {
            id: 11,
            title: 'All Product',
            icons: <FaCartArrowDown />,
            role: 'seller',
            path: "/seller/dashboard/all-product"

        },
        {
            id: 12,
            title: 'Discout Product',
            icons: <CiDiscount1 />,
            role: 'seller',
            path: "/seller/dashboard/discount-product"

        },
        {
            id: 13,
            title: 'Orders',
            icons: <RiShoppingCartFill />,
            role: 'seller',
            path: "/seller/dashboard/orders"

        },
        {
            id: 14,
            title: 'Payments',
            icons: <MdOutlinePayment />,
            role: 'seller',
            path: "/seller/dashboard/payments"

        },
        {
            id: 15,
            title: 'Chat-Customer',
            icons: <IoChatbubblesOutline />,
            role: 'seller',
            path: "/seller/dashboard/chat-customer"

        },
        {
            id: 16,
            title: 'Chat-Support',
            icons: <IoChatbubblesSharp />,
            role: 'seller',
            path: "/seller/dashboard/chat-admin"

        },
        {
            id: 17,
            title: 'Profail-Setting',
            icons: <FaUserCircle />,
            role: 'seller',
            path: "/seller/dashboard/profile-setting"

        },



    ]