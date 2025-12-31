import { Routes, Route } from 'react-router-dom'
import Landing from '../pages/Landing'
import Dashboard from '../pages/Dashboard'
import Book from '../pages/Book'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
