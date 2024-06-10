import React from 'react'
import css from './Header.module.css'
import BackButton from '../BackButton/BackButton';
import Navigation from '../Navigation/Navigation';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={css.headerContainer}>
    <BackButton />
    <Navigation />
    {/* <button onClick={() => handleLanguageChange('en')}>EN</button>
    <button onClick={() => handleLanguageChange('de')}>DE</button> */}
    <ThemeToggler />
  </div>
  )
}


export default Header;