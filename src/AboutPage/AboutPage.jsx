import React from "react";
import css from "./AboutPage.module.css";
import aboutMeText from "./aboutMeText.json";
import { Link } from "react-router-dom";
import ParagraphNight from "../components/ParagraphNight/ParagraphNight";
import { LightboxGallery } from "../FigoRest/LightboxGallery";
import c11 from "../images/c11.jpg";
import c12 from "../images/c12.jpg";
import c13 from "../images/c13.jpg";
import c14 from "../images/c14.jpg";

const AboutPage = () => {
  const skills = [
    { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "React.js", url: "https://reactjs.org/" },
    { name: "Tailwind", url: "https://tailwindcss.com/" },
    { name: "Typescript", url: "https://www.typescriptlang.org/" },
    { name: "Git and GitHub", url: "https://github.com/" },
    { name: "Next.js", url: "https://nextjs.org/" },
  ];

  const languages = [
    { Romanian: "native" },
    { English: "C1" },
    { Greek: "B2" },
    { German: "B1" },
  ];

  const certifications = [c11, c12, c13, c14];

  return (
    <div className={css.mainContainer}>
      <aside className={css.aside}>
        <div>
          <h2 className={css.skills}>Languages:</h2>
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
        <div className={css.foreignList}>
          <h2>We can also talk in: </h2>
          <ul className={css.spokenLan}>
            {languages.map((lang, index) => (
              <li key={index}>
                <span className={css.boldLang}>{Object.keys(lang)[0]}</span>
                <br /> - {lang[Object.keys(lang)[0]]} - <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main>
        <div className={css.aboutBackground}>
          <h2 className={css.hey}>Hey there!</h2>
          <ParagraphNight>
            {aboutMeText.texts.map((text, index) => (
              <p className={css.paragraph} key={index}>
                {text}
              </p>
            ))}
          </ParagraphNight>
        </div>
        <div className={css.certificationsContainer}>
          <h2>My Certifications</h2>
          <LightboxGallery images={certifications} />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
