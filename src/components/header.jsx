function Header({ theme, onToggleTheme }) {
    const title = "Profile App";

    return (
    <header className="site-header">
        <div>
            <h1>{title}</h1>
            <p>Yewon Choi</p>
        </div>

        <button type="button" onClick={onToggleTheme}>
            {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
    </header>
    );
}

export default Header;
