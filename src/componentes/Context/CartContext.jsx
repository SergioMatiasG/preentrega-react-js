import React, { createContext,useState } from 'react'

export const CartContext = createContext()

const CartComponentContext = ({children}) => {

    const [numero, setNumero] = useState (47)

  return (
    <CartContext.Provider value= {{numero, setNumero}} >
        {children}
    </CartContext.Provider>
  )
}

export default CartComponentContext
