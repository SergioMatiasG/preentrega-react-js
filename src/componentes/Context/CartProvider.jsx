import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [initialized, setInitialized] = useState(false);
    
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart && !initialized) {
          setCart(storedCart);
          setInitialized(true);
        }
      }, [initialized]);


    const addToCart = (product, quantity) => {

        const existingPorductIndex = cart.findIndex((item) => item.product.id === product.id)

        if (existingPorductIndex !== -1) {

            const updateCart = [...cart]
            updateCart[existingPorductIndex].quantity += quantity
            setCart(updateCart)

        } else {
            setCart([...cart, { product, quantity }])
        }
        console.log(cart)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export const useCart = () => {
    return useContext(CartContext);
};