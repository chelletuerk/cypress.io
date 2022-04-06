import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
  <button
    onClick={props.onClick}
    className={props.className}
    data-cy="submit"
  >
    {props.text}
  </button>
  )
}

export default Button
