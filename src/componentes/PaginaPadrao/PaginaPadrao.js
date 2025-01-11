import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />
            
            <Outlet />
        </main>
    )
}