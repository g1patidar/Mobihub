import Admin_Header from "./Admin_pages/Admin_components/Admin_Header";
import Admin_Footer from "./Admin_pages/Admin_components/Admin_Footer";

import {  Outlet } from "react-router-dom";

const Admin_Layout=()=>{

    return(
        <>
            <Admin_Header/>
            <Outlet/>
            <Admin_Footer/>

            
        </>
    )
}
export default Admin_Layout;