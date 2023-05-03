import React from 'react'
import classes from './Header.module.css'
import HeaderButton from './HeaderButton'
import mealImage from '../../assets/meals.jpg'

const Header = ({ onShowCart }) => {
  return (
    <>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onClick={onShowCart} />
      </div>
      <div className={classes[`main-image`]}>
        <img src={mealImage} alt="a full meals table" />
      </div>
    </>
  )
}

export default Header
