import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home/Home";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<NotFoundPage></NotFoundPage>,
    children:[
        {
            path:'/',
            Component: Home
        },
        {
            path:'/contactUs',
            Component: ContactPage,
        },
    ]
    
  },
]);

export default router