import React, { useRef } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = ({ id, onAddAmountMeal }) => {
  const amountInput = useRef()

  const submitHandler = event => {
    event.preventDefault()
    const enteredAmount = amountInput.current.value

    onAddAmountMeal(+enteredAmount)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        id={id}
        min={1}
        max={5}
        step={1}
        defaultValue={1}
        label={`Amount`}
        type={`number`}
        ref={amountInput}
      />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
