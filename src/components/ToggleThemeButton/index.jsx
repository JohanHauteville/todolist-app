import './styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import * as themeActions from '../../features/theme'


function ToggleThemeButton() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    return (
        <button className={theme === 'light' ? 'dark-mode-button' : 'dark-mode-button dark-mode-button--dark'} onClick={() => dispatch(themeActions.toggle())}>
            {theme === 'light' ? '🌒' : '🌕'}
        </button>
    )

}

export default ToggleThemeButton