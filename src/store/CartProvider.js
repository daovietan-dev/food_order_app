import React, { useReducer } from 'react'
import CartContext from './cart-context'

const reducer = (state, action) => {
  switch (action.type) {
    case `ADD_MEAL`: {
      const existingIndex = state.meals.findIndex(
        meal => meal.id === action.meal.id
      )
      const existingMeal = state.meals[existingIndex]
      let updateMeals

      if (existingMeal) {
        updateMeals = [...state.meals]
        updateMeals[existingIndex] = {
          ...existingMeal,
          amount: existingMeal.amount + action.meal.amount,
        }
      } else {
        updateMeals = [...state.meals, action.meal]
      }

      const updateTotalAmount =
        state.totalAmount + action.meal.price * action.meal.amount

      return {
        meals: updateMeals,
        totalAmount: updateTotalAmount,
      }
    }

    case `REMOVE_MEAL`: {
      const existingIndex = state.meals.findIndex(meal => meal.id === action.id)
      const existingMeal = state.meals[existingIndex]
      let updateMeals = [...state.meals]

      if (existingMeal.amount === 1) {
        updateMeals = state.meals.filter(meal => meal.id !== action.id)
      } else {
        updateMeals[existingIndex] = {
          ...existingMeal,
          amount: existingMeal.amount - 1,
        }
      }

      const updateTotalAmount = state.totalAmount - existingMeal.price

      return {
        meals: updateMeals,
        totalAmount: updateTotalAmount,
      }
    }

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
