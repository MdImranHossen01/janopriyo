import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<NotFoundPage></NotFoundPage>,
    children:[
        {
            path:'/',
            Component: Home
        }
    ]
    
  },
]);

export default router