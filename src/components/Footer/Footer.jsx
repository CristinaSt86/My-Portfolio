import React from 'react'
import css from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <p>&copy; 2024  Cristina Stoian.  All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;