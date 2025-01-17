import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import CarCreatePage from "../pages/CarCreatePage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <CarsPage />
            },
            {
                path: 'create',
                element: <CarCreatePage />
            }
        ]
    }
])