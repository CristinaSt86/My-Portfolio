import React from 'react'
import css from "./Footer.module.css"
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <p>{t('footerText')}</p>
      </div>
    </footer>
  )
}

export default Footer;