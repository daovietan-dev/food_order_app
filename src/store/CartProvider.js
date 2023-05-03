import React, { useReducer } from 'react'
import CartContext from './cart-context'

const reducer = (state, action) => {
  switch (action.type) {
    case `ADD_MEAL`:
      break

    case `REMOVE_MEAL`:
      break

    default:
      throw new Error(`NO ACTION FOUND!`)
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    meals: [],
    totalAmount: 0,
  })

  const addMealHandler = meal => {
    dispatch({
      type: `ADD_MEAL`,
      meal: meal,
    })
  }

  const removeMealHandler = id => {
    dispatch({
      type: `REMOVE_MEAL`,
      id: id,
    })
  }

  const mealContext = {
    meals: state.meals,
    totalAmount: state.totalAmount,
    addMeal: addMealHandler,
    removeMeal: removeMealHandler,
  }

  return (
    <CartContext.Provider value={mealContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider
