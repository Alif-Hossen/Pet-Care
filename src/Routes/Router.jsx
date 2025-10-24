import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BookNow from "../Pages/BookNow/BookNow";
import PrivateRoute from "../Provider/PrivateRoute";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Vets from "../Pages/Vets/Vets";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    index: true,
                    // loader: async () => {
                    //     const res = await fetch('services.json');
                    //     return res.json();
                    // },
                    loader: async () => {
                        const services = await fetch('services.json').then(res => res.json());
                        const vets = await fetch('vets.json').then(res => res.json());
                        const care = await fetch('careTips.json').then(res => res.json());

                        return { services, vets, care };
                    },
                    element: <Home></Home>
                },
                // {
                //     path: '/vets',
                //     loader: async () => {
                //         const res = await fetch('vets.json');
                //         return res.json();
                //     },
                //     element: <Vets></Vets>

                // },
                {
                    path: '/service',
                    loader: async () => {
                        const result = await fetch('allServices.json');
                        return result.json();
                    },
                    element: <Service></Service>
                },
                {
                    path: '/cardDetails/:id',
                    element: <PrivateRoute>
                        <CardDetails />
                    </PrivateRoute>,
                    loader: () => fetch('/allServices.json'),
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/bookNow',
                    element: <BookNow></BookNow>
                },
                {
                    path: '/myProfile',
                    element: <MyProfile></MyProfile>
                }

            ]

        }
    ]
)

export default router
