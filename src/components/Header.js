function Header({ isDarkMode, onDarkModeClick }) {
    console.log(isDarkMode);
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Light" : "Dark"} Mode
            </button>
       </header>
    )
}

export default Header