import '../../styles/components-styles/footer.css'

export default function Footer() {
    return (
        <footer className="footer glass">
            <div className="container footer__container">
                <p className="footer__text">
                    © {new Date().getFullYear()} Relatos de Papel
                </p>
                <p className="footer__subtext">
                    Proyecto académico – Frontend React
                </p>
            </div>
        </footer>
    )
}
