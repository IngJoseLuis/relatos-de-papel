import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import GlassButton from '../ui/GlassButton'
import '../../styles/components-styles/book-card.css'

export default function BookCard({ book }) {
    const { addToCart } = useContext(CartContext)

    const handleAdd = e => {
        e.preventDefault()
        addToCart(book)
    }

    return (
        <article className="book-card glass">
            <Link to={`/book/${book.id}`} className="book-card__link">
                <img
                    src={book.image}
                    alt={book.title}
                    className="book-card__image"
                />

                <div className="book-card__content">
                    <h3 className="book-card__title">{book.title}</h3>
                    <p className="book-card__author">{book.author}</p>
                    <p className="book-card__price">${book.price}</p>

                    <div className="book-card__actions">
                        <GlassButton
                            text="Añadir al carrito"
                            onClick={handleAdd}
                        />
                    </div>
                </div>
            </Link>
        </article>
    )
}
