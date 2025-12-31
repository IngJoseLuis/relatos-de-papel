import BookCard from './BookCard'
import '../../styles/components-styles/book-list.css'

export default function BookList({ books }) {
    return (
        <section className="book-list">
            <div className="container">
                <div className="row g-4">
                    {books.map(book => (
                        <div key={book.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
