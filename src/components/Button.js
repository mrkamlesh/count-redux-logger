import React from 'react'
import '../App.css'

const Button = ({ onClick, name }) => {
    return <button onClick={onClick}>{name}</button>
}

export default Button;