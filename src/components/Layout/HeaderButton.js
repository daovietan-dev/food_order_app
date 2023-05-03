import React from 'react'
import classes from './HeaderButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderButton
