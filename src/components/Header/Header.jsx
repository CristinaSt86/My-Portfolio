import React from "react";
import css from "./Header.module.css";
import BackButton from "../BackButton/BackButton";
import Navigation from "../Navigation/Navigation";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { useLanguage } from "../../LanguageContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { toggleLanguage } = useLanguage();
  const { i18n } = useTranslation();

  const handleLanguageToggle = () => {
    toggleLanguage();
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

  return (
    <div className={css.headerContainer}>
      <BackButton />
      <Navigation />
      <div className={css.langThemeContainer}>
        <button onClick={handleLanguageToggle} className={css.languageTogg}>
          {i18n.language === "en" ? "DE" : "EN"}
        </button>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
