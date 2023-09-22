import './styles.scss'
import { useSelector } from 'react-redux'

function Error() {
    const theme = useSelector(state => state.theme)
    return <main className={theme === "light" ? "error-page" : "error-page error-page--dark"}>
        <i className="fa-solid fa-heart-crack"></i>
        <h2>404</h2>
        <p>Les ressources demandées n'existent pas</p>
    </main>

}

export default Error