import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Courses from "../pages/Courses/Courses";
import Course from "../pages/Course/Course";
const myRoutes = createBrowserRouter([
    {
        path:'/',
        element : <MainLayout />,
        children: [
            {
                path: "/",
                element : <Home />
            },
            {
                path: "/login",
                element : <Login />
            },
            {
                path: "/register",
                element : <Register />
            },
            {
                path: "/courses",
                element : <Courses />
            },
            {
                path: "/course",
                element : <Course />
            },
        ]
    }
])

export default myRoutes;