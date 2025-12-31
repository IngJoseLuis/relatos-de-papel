import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import GlassButton from '../components/ui/GlassButton'
import Modal from '../components/ui/Modal'
import '../styles/pages-styles/checkout.css'

export default function Checkout() {
    const { cart, clearCart, removeFromCart } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    const handleConfirm = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        clearCart()
        setShowModal(false)
        navigate('/dashboard')
    }

    if (cart.length === 0) {
        return (
            <main className="checkout">
                <div className="checkout__empty glass">
                    <p>No hay productos en el carrito</p>
                    <GlassButton
                        text="Volver al inicio"
                        onClick={() => navigate('/dashboard')}
                    />
                </div>
            </main>
        )
    }

    return (
        <main className="checkout">
            <section className="checkout__summary glass">
                <h2 className="checkout__title">Resumen de compra</h2>

                <ul className="checkout__list">
                    {cart.map(item => (
                        <li key={item.id} className="checkout__item">
                            <span className="checkout__item-title">
                                {item.title}
                            </span>

                            <div className="checkout__item-actions">
                                <span className="checkout__item-qty">
                                    {item.quantity} unidad{item.quantity > 1 ? 'es' : ''}
                                </span>

                                <span className="checkout__item-price">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>

                                <button
                                    className="checkout__remove"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    ✕
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <p className="checkout__total">
                    Total:
                    <br />
                    <span className="checkout__total-price">
                        ${total.toFixed(2)}
                    </span>
                </p>

                <div className="checkout__actions">
                    <GlassButton
                        text="Confirmar compra"
                        onClick={handleConfirm}
                    />
                    <GlassButton
                        text="Cancelar"
                        onClick={() => navigate('/dashboard')}
                    />
                </div>
            </section>

            {showModal && (
                <Modal
                    title="Pedido realizado"
                    text="Gracias por tu compra. Tu pedido se ha procesado correctamente."
                    onClose={handleCloseModal}
                />
            )}
        </main>
    )
}
