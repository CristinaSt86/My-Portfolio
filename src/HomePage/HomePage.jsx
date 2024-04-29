import React from "react";
import css from "./HomePage.module.css";
import Image from "../components/Image/Image";
import Cris from "../images/Cris.png";
import { useTheme } from "../ThemeContext";

const HomePage = () => {
  const { theme } = useTheme();
  const imagineDark =
    theme === "dark" ? `${css.imagine} ${css.imagineNight} ` : css.imagine;

  return (
    <div className={css.mainContainer}>
      <Image src={Cris} alt="myPicture" className={imagineDark} />
      <h2 className={css.titlu}>
        <span>Hello! I'm Cristina,</span>
        <br />
        based in Germany <span className={css.shineEffect}> junior frontend developer </span> passionate about crafting
        beautiful and intuitive web experiences.
      </h2>
    </div>
  );
};

export default HomePage;
