import './../../assets/css/header.css';
function Header() {
    return (
        <header className='header'>
            <h1 className='header-title'>Welcome to My App</h1>
            <nav className='header-nav'>
                <p>Home</p>

                <p>About</p>

                <p>Contact</p>
            </nav>
        </header>
    );
}

export default Header;
