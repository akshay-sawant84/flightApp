import React from 'react'
import './Button.css'

const Button = ({btn,onClickFunc}) => {
    return (
        <button className = 'btn' onClick = {()=> onClickFunc()}>{btn}</button>
    )
}

export default Button
