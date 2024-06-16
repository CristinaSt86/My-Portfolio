import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
import hamburgerMenu from "../../images/meniuHam.png";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: t("header.home"), path: "/" },
    { name: t("header.about"), path: "/about" },
    { name: t("header.projects"), path: "/projects" },
    { name: t("header.services"), path: "/services" },
    { name: t("header.contact"), path: "/contact" },
  ];

  const { theme } = useTheme();

  const linksDarkMode =
    theme === "dark" ? `${css.links}  ${css.linksNight}` : css.links;

  return (
    <nav ref={navRef}>
      <div className={css.hamburger} onClick={toggleMenu}>
        <img src={hamburgerMenu} alt="mobile-menu" />
      </div>
      <ul className={`${css.list} ${menuOpen ? css.show : ""}`}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={linksDarkMode}
            style={{ animationDelay: `${index * 0.1}s` }} 
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
