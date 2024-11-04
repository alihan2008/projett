import React from 'react'
import "./Header.module.css"
import Button from './UI/Button'

const Header = (props) => {
  return (
    <header>
    <h1>Expenses-tracer</h1>
    <Button onClick={props.visibleForm}>Add-Expenses</Button>
    </header>
  )
}

export default Header