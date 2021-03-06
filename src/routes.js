import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import About from "./components/About";
import React from "react";
import Products from "./components/Products";
const routes=[
    {
        path:'/',
        exact:true,
        main:()=> <Home/>
    },
    {
        path:'/about',
        exact:false,
        main:()=> <About/>
    },
    {
        path:'/contact',
        exact:false,
        main:()=> <Contact/>
    },
    {
        path:'/products',
        exact:false,
        main:({match})=> <Products match={match}/>
    },
    {
        path:'',
        exact:false,
        main:()=> <NotFound/>
    }
];
export default routes;
