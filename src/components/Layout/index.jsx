import SideBar from "../SideBar";
import Header from "../Header";
import './styles.scss'
import { useSelector } from "react-redux";

function Layout({ children }) {
    const isDiplayed = useSelector(state => state.connect.isDiplayed)

    return <>
        

                    <SideBar />
                    <Header />
                    {children}
     
        
        
    </>
}

export default Layout;