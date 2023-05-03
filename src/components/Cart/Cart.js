import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const meals = [
  {
    id: `m1`,
    price: 10,
    amount: 1,
    name: `sushi`,
  },
  {
    id: `m2`,
    price: 10,
    amount: 1,
    name: `salmon`,
  },
]

const Cart = ({ onHideCart }) => {
  const mealList = (
    <ul className={classes[`cart-items`]}>
      {meals.map(meal => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onHideCart={onHideCart}>
      {mealList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${(3.0).toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
