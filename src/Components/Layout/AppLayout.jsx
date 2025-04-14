import { Outlet } from "react-router-dom";
import Footer from "../Ui/Footer"
import Headers from "../Ui/Header";

function AppLayout(){
 
    return(
        <>
        <Headers/>
        <Outlet/> {/* This will render the child routes */}
        <Footer/>
        
        </>
    )
}

export default AppLayout;