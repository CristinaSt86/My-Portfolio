import React from "react";
import css from "./AboutPage.module.css";
import { Link } from "react-router-dom";
import ParagraphNight from "../components/ParagraphNight/ParagraphNight";
import { LightboxGallery } from "../components/LightboxGallery/LightboxGallery";
import c11 from "../images/c11.jpg";
import c12 from "../images/c12.jpg";
import c13 from "../images/c13.jpg";
import c14 from "../images/c14.jpg";
import c15 from "../images/c15.png";
import c16 from "../images/c16.png";
import c17 from "../images/c17.png";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  const skills = [
    { name: t("aboutPage.skills.3.name"), url: "https://reactjs.org/" },
    {
      name: t("aboutPage.skills.2.name"),
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: t("aboutPage.skills.5.name"),
      url: "https://www.typescriptlang.org/",
    },
    { name: t("aboutPage.skills.4.name"), url: "https://tailwindcss.com/" },
    { name: t("aboutPage.skills.7.name"), url: "https://nextjs.org/" },
    {
      name: t("aboutPage.skills.0.name"),
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: t("aboutPage.skills.1.name"),
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },

    { name: t("aboutPage.skills.6.name"), url: "https://github.com/" },
  ];

  const languages = [
    {
      language: t("aboutPage.languages.0.language"),
      level: t("aboutPage.languages.0.level"),
    },
    {
      language: t("aboutPage.languages.1.language"),
      level: t("aboutPage.languages.1.level"),
    },
    {
      language: t("aboutPage.languages.2.language"),
      level: t("aboutPage.languages.2.level"),
    },
    {
      language: t("aboutPage.languages.3.language"),
      level: t("aboutPage.languages.3.level"),
    },
  ];

  const certifications = [c11, c12, c13, c14, c15, c16, c17];

  return (
    <div className={css.mainContainer}>
      <aside className={css.aside}>
        <div>
          <h2 className={css.skills}>{t("aboutPage.skillsHeader")}</h2>
          <ul className={css.ulist}>
            {skills.map((skill, index) => (
              <li key={index} className={css.listItem}>
                <Link to={skill.url} target="_blank" rel="noopener noreferrer">
                  {skill.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className={css.foreignList}>
          <h2>{t("aboutPage.languagesHeader")}</h2>
          <ul className={css.spokenLan}>
            {languages.map((lang, index) => (
              <li key={index}>
                <span className={css.boldLang}>{lang.language}</span>
                <br /> - {lang.level}
                <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className={css.main2}>
        <div className={css.aboutBackground}>
          <h2 className={css.hey}>{t("aboutPage.hello")}</h2>
          <ParagraphNight>
            {t("aboutPage.introText", { returnObjects: true }).map(
              (text, index) => (
                <p className={css.paragraph} key={index}>
                  {text}
                </p>
              )
            )}
          </ParagraphNight>
        </div>
        <div className={css.certificationsContainer}>
          <h2>{t("aboutPage.certificationsHeader")}</h2>
          <section style={{ width: "100%" }}>
            <LightboxGallery images={certifications} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
