import React from "react";
import css from "./AdviceSlip.module.css";
import Image from "../components/Image/Image";
import AdvicePic from "../images/AdvicePic.jpg";
import adviceDescription from "./adviceDescription.json";
import GoToGithub from "../components/GoToGithub/GoToGithub";
import ParagraphNight from "../components/ParagraphNight/ParagraphNight";

const AdviceSlip = () => {
  return (
    <div className={css.mainContainer}>
      <section className={css.aboutApp}>
        <h1> Advice Slip </h1>
        <ParagraphNight>
          <p>{adviceDescription.adviceDescription}</p>
        </ParagraphNight>
      </section>
      <GoToGithub to="https://github.com/CristinaSt86/Advice_Slip" />
      <section>
        <Image
          src={AdvicePic}
          alt="Advice Slip Image"
          className={css.imagine}
        />
      </section>
    </div>
  );
};

export default AdviceSlip;
