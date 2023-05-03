import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderButton = ({ onClick }) => {
  const { meals } = useContext(CartContext)
  const [isBump, setIsBump] = useState(false)

  const numberOfMealItem = meals.reduce(
    (culNumber, meal) => culNumber + meal.amount,
    0
  )
  return (
    <button
      className={`${classes.button} ${isBump ? classes.bump : ''}`}
      onClick={onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfMealItem}</span>
    </button>
  )
}

export default HeaderButton
