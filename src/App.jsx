import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import AppRouter from './routes/AppRouter'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingCart from './components/layout/FloatingCart'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <Header />
          <AppRouter />
          <FloatingCart />
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
