import MainLayout from "../../layout/MainLayout"
import { privateRoute } from "./privateRoutes"

export const getRoutes = () => {
    return {
        path : "/",
        element : <MainLayout/>,
        children : privateRoute

    }
}