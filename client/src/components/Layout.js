import { Outlet } from "react-router-dom";
import HeaderNav from "./HeaderNav";

function Layout(){
    return(
        <main>
            <HeaderNav />
            <Outlet />
        </main>
    );

}

export default Layout;