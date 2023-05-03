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

  useEffect(() => {
    if (meals.length === 0) return

    setIsBump(true)

    const timer = setTimeout(() => {
      setIsBump(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
    // if you don't add [meals] dependency, the component will re-render with a infinity times because state update
  }, [meals])

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
