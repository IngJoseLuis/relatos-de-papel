import { useNavigate } from 'react-router-dom'
import GlassButton from '../components/ui/GlassButton'
import '../styles/pages-styles/not-found.css'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <main className="not-found">
            <section className="not-found__content glass">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__text">
                    La página que buscas no existe
                </p>
                <GlassButton
                    text="Volver al inicio"
                    onClick={() => navigate('/dashboard')}
                />
            </section>
        </main>
    )
}
