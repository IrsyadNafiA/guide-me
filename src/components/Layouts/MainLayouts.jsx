import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayouts = () => {
    return(
        <React.Fragment>
            <Navigation />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default MainLayouts