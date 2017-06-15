import React from 'React'

const Button = ({ onClick }) => {
  return(
    <button
      onclick={onClick}
      className={className}
    >
      {text}
    </button>
  )
}

export default Button
