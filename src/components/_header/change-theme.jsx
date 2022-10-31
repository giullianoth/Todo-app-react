import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ChangeTheme = () => {
    return (
        <div className="main_header_content_theme">
            <FontAwesomeIcon icon={faSun} />
        </div>
    );
}

export default ChangeTheme;