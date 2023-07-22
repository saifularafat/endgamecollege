import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admissions from "../Pages/Admissions/Admissions";
import MyCollege from "../Pages/MyCollege/MyCollege";
import SignIn from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Terms from "../Pages/Terms/Terms";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'colleges', element: <Colleges /> },
            { path: 'admission', element: <Admissions /> },
            { path: 'myCollege', element: <MyCollege /> },
            { path: 'profile', element: <Profile /> },
        ]
    },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: 'terms', element: <Terms /> },

]);
export default router;