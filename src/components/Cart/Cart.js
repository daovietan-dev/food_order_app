import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartIem from './CartIem'

const Cart = ({ onHideCart }) => {
  const { meals, totalAmount, addMeal, removeMeal } = useContext(CartContext)

  const mealList = (
    <ul className={classes[`cart-items`]}>
      {meals.map(meal => (
        <CartIem
          key={meal.id}
          name={meal.name}
          price={meal.price}
          amount={meal.amount}
          onAdd={addMeal.bind(null, { ...meal, amount: 1 })}
          onRemove={removeMeal.bind(null, meal.id)}
        />
      ))}
    </ul>
  )

  const hasMeals = meals.length !== 0

  return (
    <Modal onHideCart={onHideCart}>
      {mealList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onHideCart}>
          Close
        </button>
        {hasMeals && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
