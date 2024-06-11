import React from "react";
import css from "./GoToGithub.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GoToGithub = ({ to }) => {
  const { t } = useTranslation();

  return (
    <Link to={to} className={css.Link} target="_blank">
      {t("goToGithub.linkText")}
    </Link>
  );
};

export default GoToGithub;
