import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GlassButton from '../components/ui/GlassButton'
import logo from '../assets/logos/relatos-logo.png'
import '../styles/pages-styles/landing.css'

export default function Landing() {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/dashboard')
        }, 5000)

        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <main className="landing">
            <section className="landing__hero glass">
                <img
                    src={logo}
                    alt="Relatos de Papel"
                    className="landing__logo"
                />

                <h1 className="landing__title">
                    Historias que merecen ser leídas
                </h1>

                <p className="landing__subtitle">
                    Una librería digital donde cada libro guarda una voz,
                    una emoción y un recuerdo esperando ser descubierto.
                </p>

                <GlassButton
                    text="Explorar libros"
                    onClick={() => navigate('/dashboard')}
                />
            </section>

            <section className="landing__section">
                <h2 className="landing__section-title">
                    ¿Qué es Relatos de Papel?
                </h2>

                <p className="landing__text">
                    Relatos de Papel es una experiencia de lectura pensada para
                    quienes disfrutan perderse entre páginas, descubrir nuevas
                    historias y conectar con autores que escriben desde lo humano.
                </p>
            </section>

            <section className="landing__features">
                <div className="landing__feature glass">
                    <h3 className="landing__feature-title">
                        Libros seleccionados
                    </h3>
                    <p className="landing__feature-text">
                        Una colección curada de relatos, novelas y ensayos
                        que priorizan la calidad narrativa.
                    </p>
                </div>

                <div className="landing__feature glass">
                    <h3 className="landing__feature-title">
                        Experiencia simple
                    </h3>
                    <p className="landing__feature-text">
                        Navega, descubre y compra libros de forma clara,
                        rápida y sin distracciones.
                    </p>
                </div>

                <div className="landing__feature glass">
                    <h3 className="landing__feature-title">
                        Lectura con sentido
                    </h3>
                    <p className="landing__feature-text">
                        Cada historia está pensada para dejar una huella,
                        invitar a la reflexión y acompañar al lector.
                    </p>
                </div>
            </section>
        </main>
    )
}
