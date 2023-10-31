import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {


    const [cart, setCart] = useState(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        return storedCart || []; 
    });


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
    
    const removeProductFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.product.id !== productId);
        setCart(updatedCart);
    };
    const updateQuantityInCart = (productId, newQuantity) => {
        const updatedCart = cart.map(item => {
            if (item.product.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    };
    

    return (
        <CartContext.Provider value={{ cart, addToCart, removeProductFromCart, updateQuantityInCart  }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export const useCart = () => {
    return useContext(CartContext);
};