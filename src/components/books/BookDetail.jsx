import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { books } from '../../mocks/books'
import { CartContext } from '../../context/CartContext'
import GlassButton from '../ui/GlassButton'
import '../../styles/components-styles/book-detail.css'

export default function BookDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addToCart } = useContext(CartContext)

    const book = books.find(item => item.id === Number(id))

    if (!book) {
        return (
            <section className="book-detail">
                <h2>Libro no encontrado</h2>
            </section>
        )
    }

    return (
        <section className="book-detail glass">
            <div className="book-detail__image-wrapper">
                <img
                    src={book.image}
                    alt={book.title}
                    className="book-detail__image"
                />
            </div>

            <div className="book-detail__info">
                <h1 className="book-detail__title">{book.title}</h1>
                <p className="book-detail__author">{book.author}</p>
                <p className="book-detail__description">{book.description}</p>
                <p className="book-detail__price">${book.price}</p>

                <div className="book-detail__actions">
                    <GlassButton
                        text="Añadir al carrito"
                        onClick={() => addToCart(book)}
                    />
                    <GlassButton
                        text="Volver"
                        onClick={() => navigate(-1)}
                    />
                </div>
            </div>
        </section>
    )
}
