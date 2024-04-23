import React from "react";
import css from "./JokeTeller.module.css";
import GoToGithub from "../components/GoToGithub/GoToGithub";
import Image from "../components/Image/Image";
import miniRobotPic from "../images/miniRobotPic.jpg";
import jokeDescription from "./jokeDescription.json";
import ParagraphNight from "../components/ParagraphNight/ParagraphNight";

const JokeTeller = () => {
  return (
    <div className={css.mainContainer}>
      <section className={css.aboutApp}>
        <h1> Joke Teller</h1>
        <ParagraphNight>
          <p>{jokeDescription.jokeDescription}</p>
        </ParagraphNight>
      </section>
      <GoToGithub to="https://github.com/CristinaSt86/Robot-Mini-App" />
      <section>
        <Image
          src={miniRobotPic}
          alt="Mini Robot - Joke Teller"
          className={css.imagine}
        />
      </section>
    </div>
  );
};

export default JokeTeller;
