import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    index: true,
                    loader: async () => {
                        const res = await fetch('services.json');
                        return res.json();
                    },
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/service',
                    loader: async () => {
                        const result = await fetch('allServices.json');
                        return result.json();
                    },
                    element: <Service></Service>
                },
                // {
                //     path: '/cardDetails/:id',
                //     loader:  () =>  fetch('/allServices.json'),
                //     element: <CardDetails />
                // }
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                }

            ]

        }
    ]
)

export default router
