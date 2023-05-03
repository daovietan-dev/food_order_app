import { createContext } from 'react'

const CartContext = createContext({
  meals: [],
  totalAmount: null,
  addMeal: meal => {},
  removeMeal: id => {},
})

export default CartContext
