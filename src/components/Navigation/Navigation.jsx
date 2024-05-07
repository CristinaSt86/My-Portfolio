import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
import hamburgerMenu from "../../images/hamburgerMenu.png";
import { useTheme } from "../../ThemeContext";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // const toggleMenuAndClose = () => {
  //   toggleMenu();
  // };

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
    { name: "Home", path: "/" },
    { name: "About me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
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
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      {/* <hr /> */}
    </nav>
  );
};

export default Navigation;
