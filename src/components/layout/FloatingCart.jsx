import { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import CartSummary from '../cart/CartSummary'
import '../../styles/components-styles/floating-cart.css'

export default function FloatingCart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext)
    const [open, setOpen] = useState(false)
    const [highlight, setHighlight] = useState(false)
    const prevCount = useRef(cart.length)
    const navigate = useNavigate()

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    )


    useEffect(() => {
        if (cart.length > prevCount.current) {
            setHighlight(true)

            const timer = setTimeout(() => {
                setHighlight(false)
            }, 600)

            return () => clearTimeout(timer)
        }

        prevCount.current = cart.length
    }, [cart])

    const handleCheckout = () => {
        setOpen(false)
        navigate('/checkout')
    }

    return (
        <>
            <button
                className={`floating-cart__button glass ${highlight ? 'floating-cart__button--highlight' : ''
                    }`}
                onClick={() => setOpen(!open)}
            >
                🛒 {totalItems}
            </button>

            {open && (
                <aside className="floating-cart glass">
                    <CartSummary
                        items={cart}
                        onRemove={removeFromCart}
                        onCheckout={handleCheckout}
                        onClear={clearCart}
                    />
                </aside>
            )}
        </>
    )
}
