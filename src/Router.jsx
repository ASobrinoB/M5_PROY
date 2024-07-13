import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Clase } from "./pages/Clase";
import { Proyecto } from "./pages/Proyecto";


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
                path: '/About',
                element: <About />
            }, 
            {
                path: '/Clase',
                element: <Clase />
            }, 
            {
                path: '/Proyecto',
                element: <Proyecto />
            }
        ]
    }
])
