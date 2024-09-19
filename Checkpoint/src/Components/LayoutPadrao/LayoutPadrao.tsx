import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const LayoutPadrao = () =>{

    return(

        <>
            <Header></Header>
                <main>
                    <Outlet></Outlet>
                </main>
            <Footer></Footer>
        </>
    )


}

export default LayoutPadrao;