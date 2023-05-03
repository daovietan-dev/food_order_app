import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = ({ id }) => {
  return (
    <form className={classes.form}>
      <Input
        id={id}
        min={1}
        max={5}
        step={1}
        defaultValue={1}
        label={`Amount`}
        type={`number`}
      />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
