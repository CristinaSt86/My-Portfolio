import React from "react";
import css from "./AboutPage.module.css";
import aboutMeText from "./aboutMeText.json";
import aboutMeText2 from "./aboutMeText.json";
import aboutMeText3 from "./aboutMeText.json";
import { Link } from "react-router-dom";

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

  return (
    <div className={css.mainContainer}>
      <aside>
        <h2 className={css.skills}>Skills:</h2>
        <ul className={css.ulist}>
          {skills.map((skill, index) => (
            <li key={index} className={css.listItem}>
              <Link to={skill.url} target="_blank" rel="noopener noreferrer">
                {skill.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main>
        <div className={css.aboutBackground}>
          <h2 className={css.hey}>Hey there!</h2>
          <p className={css.paragraf}>{aboutMeText.aboutMeText}</p>
          <p className={css.paragraf}>{aboutMeText2.aboutMeText2}</p>
          <p className={css.paragraf}>{aboutMeText3.aboutMeText3}</p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
