import React from 'react'
import css from './Header.module.css'
import BackButton from '../BackButton/BackButton';
import Navigation from '../Navigation/Navigation';
import ThemeToggler from '../ThemeToggler/ThemeToggler';


const Header = () => {
  return (
    <div className={css.headerContainer}>
    <BackButton />
    <Navigation />
    <ThemeToggler />
  </div>
  )
}


export default Header;