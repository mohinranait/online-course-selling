import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;