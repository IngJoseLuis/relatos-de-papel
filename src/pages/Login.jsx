import { useNavigate } from 'react-router-dom'
import GlassButton from '../components/ui/GlassButton'
import '../styles/pages-styles/login.css'

export default function Login() {
    const navigate = useNavigate()

    return (
        <section className="login">
            <h2>Página en construcción</h2>
            <GlassButton text="Volver al inicio" onClick={() => navigate('/dashboard')} />
        </section>
    )
}
