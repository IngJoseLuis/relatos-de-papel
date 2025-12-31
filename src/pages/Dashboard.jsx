import { useState } from 'react'
import { books } from '../mocks/books'
import BookList from '../components/books/BookList'
import SearchBar from '../components/ui/SearchBar'
import { useDebounce } from '../hooks/useDebounce'

export default function Dashboard() {
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 300)

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )

    return (
        <main className="dashboard">
            <SearchBar value={search} onChange={setSearch} />
            <BookList books={filteredBooks} />
        </main>
    )
}
