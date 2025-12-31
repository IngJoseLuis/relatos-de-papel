import GlassButton from '../ui/GlassButton'
import '../../styles/components-styles/cart-item.css'

export default function CartItem({ item, onRemove }) {
    return (
        <div className="cart-item glass">
            <div className="cart-item__image-wrapper">
                <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item__image"
                />
            </div>

            <div className="cart-item__info">
                <h4 className="cart-item__title">{item.title}</h4>
                <p className="cart-item__author">{item.author}</p>
                <p className="cart-item__price">${item.price}</p>
                <p className="cart-item__quantity">
                    {item.quantity} unidad{item.quantity > 1 ? 'es' : ''}
                </p>
                <div className="cart-item__actions">
                    <GlassButton
                        text="Eliminar"
                        onClick={() => onRemove(item.id)}
                    />
                </div>
            </div>


        </div>
    )
}
