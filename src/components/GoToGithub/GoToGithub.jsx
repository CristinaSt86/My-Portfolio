import React from "react";
import css from "./GoToGithub.module.css";
import { Link } from "react-router-dom";

const GoToGithub = ({to}) => {

  // const linkDayMode =
  //   theme === "dark" ? `${css.link}  ${css.linkDay}` : css.link;

  return (
    <Link
      to={to}
      className={css.Link}
      target="_blank"
    >
      To GitHub
    </Link>
  );
};

export default GoToGithub;
