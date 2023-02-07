import { Outlet } from "react-router";
import Header from "./header";

export default function(){
    return(
        <main>
            <Header />
            <Outlet />

        </main>
    );
}