import { adminRoutes } from "./adminRoutes";
import { SellerRoutes } from "./sellerRoutes";

export const privateRoute = [
    ...adminRoutes,
    ...SellerRoutes
]