import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { EnClase } from "./pages/EnClase";
import { Currencies } from "./pages/Currencies";


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
                path: '/enclase',
                element: <EnClase />
            }, 
            {
                path: '/currencies',
                element: <Currencies />
            }
        ]
    }
])
