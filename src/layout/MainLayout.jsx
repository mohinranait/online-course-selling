import { useState } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom"
import MobileHeader from "../shared/MobileHeader";

const MainLayout = () => {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <>
           
            <Header isToggle={isToggle} setIsToggle={setIsToggle}/>
            <Outlet />
            <Footer />
            <MobileHeader isToggle={isToggle} setIsToggle={setIsToggle} />
        </>
    );
};

export default MainLayout;