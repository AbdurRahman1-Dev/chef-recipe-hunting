import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ChefInfo from "../pages/Home/ChefInfo";
import RecipeInfo from "../pages/RecipeInfo/RecipeInfo";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import UserDetails from "../pages/user details/UserDetails";
import AboutUs from "../pages/About us/AboutUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://chef-recipe-hunting-server-abdur-rahman.vercel.app/chefinfo')
      },
      {
        path: '/Chefrecipes/:id',
        element: <PrivateRoute><RecipeInfo></RecipeInfo></PrivateRoute>,
        loader: ({params})=> fetch(`https://chef-recipe-hunting-server-abdur-rahman.vercel.app/chefinfo/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Register></Register>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path:'/userdetails',
        element: <UserDetails></UserDetails>
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);

export default router