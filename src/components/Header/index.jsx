import './styles.scss'
import user from '../../assets/img/user.jpeg'

function Header() {
    return <header>
        <i className="fa-solid fa-envelope"></i>
        <i className="fa-solid fa-bell"></i>
        <span>|</span>
        <img className="profile-picture" src={user} alt="user's profile" />
        <p>Martin Hubert</p>
    </header>
}

export default Header