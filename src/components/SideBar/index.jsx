import logo from '../../assets/img/logo.png'
import './styles.scss'
import linkList from '../../mock/link-list.json'
import { Link } from 'react-router-dom'


function SideBar() {

    return <div className='side-bar'>
        <Link to="/" className='side-bar__link'>
            <img className="side-bar__logo" src={logo} alt="logo Task" />
        </Link>

        <nav>
            <ul className='side-bar__links'>
                {linkList.map((link) => {
                    return <li key={"link-" + link.title}> <i className={link.icon}></i>{link.title}</li>
                })}
            </ul>
        </nav>
        <p className='side-bar__copyright'>© copyright 2023</p>
    </div>
}


export default SideBar;