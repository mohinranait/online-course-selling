import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Courses from "../pages/Courses/Courses";
import Course from "../pages/Course/Course";
import UserLayout from "../layout/UserLayout";
import UserDashboard from "../pages/User/UserDashboard";
import PurchaceCourse from "../pages/User/PurchaceCourse";
import CourseLists from "../pages/User/CourseLists";
import ModuleAdd from "../pages/User/ModuleAdd";
import UserAccount from "../pages/User/UserAccount";
import PrivateRoute from "./PrivateRoute";
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
            {
                path: "/user",
                element : <PrivateRoute><UserLayout /></PrivateRoute> ,
                children: [
                    {
                        path: "dashboard",
                        element: <UserDashboard />
                    },
                    {
                        path: "all-courses",
                        element: <PurchaceCourse />
                    },
                    {
                        path: "your-course",
                        element: <CourseLists />
                    },
                    {
                        path: "module-manage",
                        element: <ModuleAdd />
                    },
                    {
                        path: "account",
                        element: <UserAccount />
                    },
                ]
            },
        ]
    }
])

export default myRoutes;