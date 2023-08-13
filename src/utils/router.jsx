import {useRoutes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Room from "../pages/Room/Room";
import Favorite from "../pages/Favorite/Favorite";
import Header from "../component/Layout/Header/Header";
import Footer from "../component/Footer/Footer";
import Index from "../component/Layout";


export default function  Router(){

    const routes = useRoutes([

        {

            path: '',
            element: <Index/>,
        children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/room",
            element:<Room/>
        },
        {
            path: '/favorite',
            element: <Favorite/>
        },{
        path: '/header',
            element:<Header/>,
        },
        {
            path: '/footer',
          element: <Footer/>,
        },
      ]
        }

    ])

    return routes




}