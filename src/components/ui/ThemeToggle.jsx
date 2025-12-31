import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import '../../styles/components-styles/theme-toggle.css'

export default function ThemeToggle() {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <button
            className="theme-toggle glass"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
        >
            ◐
        </button>
    )
}
