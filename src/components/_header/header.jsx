import Title from "./title";
import ChangeTheme from "./change-theme";

const Header = () => {
    return (
        <header>
            <div className="main_header_content">
                <Title />
                <ChangeTheme />
            </div>
        </header>
    );
}

export default Header;