import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = ({ id, name, price, description }) => {
  const { addMeal } = useContext(CartContext)

  const addMealHandler = amount => {
    addMeal({
      id: id,
      name: name,
      price: price,
      amount: amount,
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <MealItemForm id={id} onAddAmountMeal={addMealHandler} />
    </li>
  )
}

export default MealItem
