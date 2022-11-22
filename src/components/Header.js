import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
    <h1>{ title }</h1>
    <Button  text = {showAdd ? 'Close' : 'Add'} onClick={onAdd} color= {showAdd ? '#ff000078' : '#00800078'}></Button>
    
    </header>
  )
}
Header.defaultProps = {
  title : 'Task Trucker',
}
Header.propTypes = {
  title : PropTypes.string.isRequired,
}
export default Header