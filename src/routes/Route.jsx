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
import CourseCreate from "../pages/User/CourseCreate";
import UpdateCourse from "../pages/User/UpdateCourse";
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
                path: "/course/:id",
                element : <Course />,
                loader: async ({params}) => await fetch(`${import.meta.env.VITE_SERVER_PORT}/course/${params.id}`)
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
                        path: "module-manage/:id",
                        element: <ModuleAdd />,
                        loader: async ({params}) => await fetch(`${import.meta.env.VITE_SERVER_PORT}/course/${params.id}`)
                    },
                    {
                        path: "account",
                        element: <UserAccount />
                    },
                    {
                        path: "new-course",
                        element: <CourseCreate />
                    },
                    {
                        path: "update-course/:id",
                        element: <UpdateCourse />,
                        loader: async ({params}) => await fetch(`${import.meta.env.VITE_SERVER_PORT}/course/${params.id}`)
                    },
                ]
            },
        ]
    }
])

export default myRoutes;