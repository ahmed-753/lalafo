import React from 'react';
import Header from "../../component/Layout/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../component/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Home;