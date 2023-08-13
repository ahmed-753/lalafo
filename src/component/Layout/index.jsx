import React from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";

const Index = () => {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
            
        </div>
    );
};

export default Index;