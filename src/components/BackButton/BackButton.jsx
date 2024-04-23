import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./BackButton.module.css";
import Image from "../Image/Image";
import backArrow from '../../images/backArrow.png'
import { useTheme } from "../../ThemeContext";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const { theme } = useTheme();

  const backBtnDarkMode =
    theme === "dark"
      ? `${css.handleBackBtn} ${css.handleBackBtnNight}`
      : css.handleBackBtn;

  return (
    <Image
      src={backArrow}
      alt="back-to-previous-page"
      onClick={handleBack}
      className={backBtnDarkMode}
    />
  );
};

export default BackButton;
