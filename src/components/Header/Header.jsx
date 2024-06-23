import React from "react";
import css from "./Header.module.css";
import BackButton from "../BackButton/BackButton";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { useLanguage } from "../../LanguageContext";
import { useTranslation } from "react-i18next";
import logo from "../../images/l3.svg";

const Header = () => {
  // const { toggleLanguage } = useLanguage();
  const { i18n } = useTranslation();

  // const handleLanguageToggle = () => {
  //   toggleLanguage();
  //   i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  // };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={css.headerContainer}>
      <div className={css.logoCont}>
        <BackButton />
        <Link to="/">
          <img src={logo} alt="logo" className={css.logo} />
        </Link>
      </div>

      <div className={css.langThemeContainer}>
        <Navigation />
        {/* <button onClick={handleLanguageToggle} className={css.languageTogg}>
          {i18n.language === "en" ? "DE" : "EN"}
        </button> */}
        <select
          onChange={handleLanguageChange}
          value={i18n.language}
          className={css.languageDropdown}
        >
          <option value="en" className={css.option}>
            En
          </option>
          <option value="de" className={css.option}>
            De
          </option>
          <option value="ro" className={css.option}>
            Ro
          </option>
        </select>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
