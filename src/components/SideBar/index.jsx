import logo from '../../assets/img/logo.png'
import darkLogo from '../../assets/img/logo_black.png'
import './styles.scss'
import linkList from '../../mock/link-list.json'
import { Link } from 'react-router-dom'
import ToggleThemeButton from '../ToggleThemeButton'
import { useSelector } from 'react-redux'


function SideBar() {
    const theme = useSelector(state => state.theme)

    return <div className={theme === 'light' ? 'side-bar' : 'side-bar side-bar--dark'}>
        <Link to="/" className='side-bar__link'>
            <img className={theme === 'light' ? "side-bar__logo" : "side-bar__logo side-bar__logo--dark"} src={theme === 'light' ? logo : darkLogo} alt="logo Task" />
        </Link>

        <nav>
            <ul className='side-bar__links'>
                {linkList.map((link) => {
                    return <li key={"link-" + link.title}> <i className={link.icon}></i>{link.title}</li>
                })}
            </ul>
        </nav>
        <ToggleThemeButton />
        <p className='side-bar__copyright'>© copyright 2023</p>
    </div>
}


export default SideBar;