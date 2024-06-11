import React from "react";
import Cris from "../images/Cris.png";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";
import Instagram from "../images/instagram.png";
import css from "./ContactPage.module.css";
import { Link } from "react-router-dom";
import Image from "../components/Image/Image";
import { useTheme } from "../ThemeContext";
import Form from "../components/Form/Form";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const emailAddress = "cristina.stoian@yahoo.com";
  const contactBgDarkMode =
    theme === "dark"
      ? `${css.contactBackground}  ${css.contactBackgroundNight}`
      : css.contactBackground;

  return (
    <div className={css.display}>
      <div className={contactBgDarkMode}>
        <div className={css.imageContainer}>
          <Image
            src={Cris}
            alt={t("contactPage.imageAlt")}
            className={css.imagine}
          />
        </div>
        <div className={css.contactContainer}>
          <h1 className={css.contactMe}>{t("contactPage.contactMe")}</h1>
          <h2 className={css.mobile}>{t("contactPage.mobile")}</h2>
          <h2>
            <a href={`mailto:${emailAddress}`} className={css.mail}>
              {t("contactPage.hireMe")}
            </a>
          </h2>
          <div className={css.contactLinks}>
            <Link to="https://github.com/CristinaSt86" target="blank">
              <Image
                src={Github}
                alt={t("contactPage.githubAlt")}
                className={css.socialMediaImg}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/cristina-stoian-frontend-developer/"
              target="blank"
            >
              <Image
                src={Linkedin}
                alt={t("contactPage.linkedInAlt")}
                className={css.socialMediaImg}
              />
            </Link>
            <Link to="https://www.instagram.com/crissalexx/" target="blank">
              <Image
                src={Instagram}
                alt={t("contactPage.instagramAlt")}
                className={css.socialMediaImg}
              />
            </Link>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default ContactPage;
