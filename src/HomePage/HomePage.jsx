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
        Hello! I'm Cristina,
        <br />
        dedicated junior frontend developer based in Germany, focused on
        creating elegant and user-friendly web solutions.
      </h2>
    </div>
  );
};

export default HomePage;
