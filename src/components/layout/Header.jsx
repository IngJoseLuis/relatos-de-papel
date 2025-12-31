import { Link } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'
import '../../styles/components-styles/header.css'
import logo from '../../assets/logos/relatos-logo.png'

export default function Header() {
    return (
        <header className="header glass">
            <div className="container header__container">
                <Link to="/dashboard" className="header__logo">
                    <img
                        src={logo}
                        alt="Relatos de Papel"
                        className="header__logo-image"
                    />
                </Link>

                <nav className="header__nav">
                    <ThemeToggle />
                    <Link to="/login" className="header__login">
                        <span className="header__login-icon">👤</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
