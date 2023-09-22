import './styles.scss'
import user from '../../assets/img/user.jpeg'
import { useSelector } from 'react-redux'

function Header() {
    const theme = useSelector(state => state.theme)

    return <header className={theme === 'dark' ? 'header--dark' : ''}>
        <i className="fa-solid fa-envelope"></i>
        <i className="fa-solid fa-bell"></i>
        <span>|</span>
        <img className="profile-picture" src={user} alt="user's profile" />
        <p>Martin Hubert</p>
    </header>
}

export default Header