import CartItem from './CartItem'
import GlassButton from '../ui/GlassButton'
import '../../styles/components-styles/cart-summary.css'

export default function CartSummary({ items, onRemove, onCheckout, onClear }) {
    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    return (
        <section className="cart-summary">
            <h3 className="cart-summary__title">Carrito</h3>

            {items.length === 0 && (
                <p className="cart-summary__empty">El carrito está vacío</p>
            )}

            <div className="cart-summary__items">
                {items.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onRemove={onRemove}
                    />
                ))}
            </div>

            {items.length > 0 && (
                <>
                    <div className="cart-summary__footer">
                        <p className="cart-summary__total">
                            Total: ${total.toFixed(2)}
                        </p>

                        <GlassButton
                            text="Finalizar compra"
                            onClick={onCheckout}
                        />
                    </div>

                    <button
                        className="cart-summary__clear"
                        onClick={onClear}
                    >
                        Vaciar carrito
                    </button>
                </>
            )}
        </section>
    )
}
