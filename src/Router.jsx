import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UltimaClase } from "./pages/UltimaClase";
import { Countries } from "./pages/Countries";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/about',
                element: <About />
            }, 
            {
                path: '/ultimaclase',
                element: <UltimaClase />
            }, 
            {
                path: '/countries',
                element: <Countries />
            }
        ]
    }
])
