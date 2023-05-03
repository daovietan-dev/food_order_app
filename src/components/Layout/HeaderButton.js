import React from 'react'
import classes from './HeaderButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderButton = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderButton
