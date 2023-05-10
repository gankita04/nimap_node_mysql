import {
    createBrowserRouter,
} from "react-router-dom";

import Addcategory from './components/Addcategory';
import Addproduct from './components/Addproduct';
import Showcategory from './components/Showcategory';
import Showproduct from './components/Showproduct';

import Main from "./components/Main";
import Home from "./components/Home";
import Deletecategory from "./components/Deletecategory";
import Deletepro from "./components/Deletepro";
import Editcategory from "./components/Editcategory";
import Editproduct from "./components/Editproduct";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/add-category",
                element: <Addcategory />
            },
            {
                path: "/add-product",
                element: <Addproduct />
            },
            {
                path: "/show-category",
                element: <Showcategory />
            },
            {
                path: "/show-product",
                element: <Showproduct />
            },
            {
                path: "/delete-cat/:id",
                element: <Deletecategory/>
            },
            {
                path: "/delete-pro/:id",
                element: <Deletepro/>
            },
            {
                path: "/edit-cat/:id",
                element: <Editcategory/>
            },
            {
                path: "/edit-pro/:id",
                element: <Editproduct/>
            },
        ]
    }
]);

export default router;