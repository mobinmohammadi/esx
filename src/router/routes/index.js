import MainLayout from "../../layout/MainLayout"
import { privateRoute } from "./privateRoutes"
import ProtectRoute from './ProtectRoute'



export const getRoutes = () => {

    privateRoute.map(r => (
        r.element = <ProtectRoute route={r}>{r.element}</ProtectRoute>

    
        
    ))

    return {
        path: "/",
        element: <MainLayout />,
        children: privateRoute

    }
}