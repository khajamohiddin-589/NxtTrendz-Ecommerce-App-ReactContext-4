import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  deleteAllItems: () => {},
})

export default CartContext
