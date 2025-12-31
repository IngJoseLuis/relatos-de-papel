import '../../styles/components-styles/modal.css'

export default function Modal({ title, text, onClose }) {
    return (
        <div className="modal">
            <div className="modal__overlay" onClick={onClose} />

            <div className="modal__content glass">
                <h3 className="modal__title">{title}</h3>
                <p className="modal__text">{text}</p>

                <button className="modal__button" onClick={onClose}>
                    Ir al inicio
                </button>
            </div>
        </div>
    )
}
