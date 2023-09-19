import SideBar from "../SideBar";
import Header from "../Header";
import './styles.scss'

function Layout({ children }) {

    return <>
        <SideBar />
        <Header />
        {children}
    </>
}

export default Layout;