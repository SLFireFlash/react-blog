import { Outlet } from "react-router";
import Footer from "./comps/footer";
import Header from "./header";

export default function Layout(){
    return(
        <main>
            <Header />
            <Outlet />
            <Footer />

        </main>
    );
}