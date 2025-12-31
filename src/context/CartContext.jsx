import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useLocalStorage('cart', [])

    const addToCart = book => {
        setCart(prev => {
            const existingItem = prev.find(item => item.id === book.id)

            if (existingItem) {
                return prev.map(item =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...prev, { ...book, quantity: 1 }]
        })
    }

    const removeFromCart = id => {
        setCart(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        )
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
