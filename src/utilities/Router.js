import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Statics from '../components/Statics/Statics';
import Blog from '../components/Blog/Blog';
import Quiz from "../components/Quiz/Quiz";
import { dataLoader } from "./loader";





const router = createBrowserRouter([
    {path:'/',element:<Main/>,errorElement:<ErrorPage/>,children:[
        {path:'/',loader:dataLoader,element:<Home/>},
        {path:'home',loader:dataLoader,element:<Home/>},
        {path:'statics',loader:dataLoader, element:<Statics/>},
        {path:'blog',element:<Blog/>},
        {path:'quiz/:id', loader:({params})=> fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element:<Quiz/>}
    ]}
])

export default router;