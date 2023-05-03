import React, { forwardRef } from 'react'
import classes from './Input.module.css'

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input {...props} ref={ref} />
    </div>
  )
})

export default Input
