import React from "react";
import css from "./FigoRest.module.css";
import GoToGithub from "../components/GoToGithub/GoToGithub";
import figoDescription from "./figoDescription.json";
import { LightboxGallery } from "./LightboxGallery";
import "react-image-lightbox/style.css";
import figoPic1 from "../images/figoPic1.jpg";
import figoPic2 from "../images/figoPic2.jpg";
import figoPic3 from "../images/figoPic3.jpg";
import figoPic4 from "../images/figoPic4.jpg";
import figoPic5 from "../images/figoPic5.jpg";
import figoPic6 from "../images/figoPic6.jpg";
import figoPic7 from "../images/figoPic7.jpg";
import figoPic8 from "../images/figoPic8.jpg";
import figoPic9 from "../images/figoPic9.jpg";
import ParagraphNight from "../components/ParagraphNight/ParagraphNight";

const FigoRest = () => {
  const images = [
    figoPic1,
    figoPic2,
    figoPic3,
    figoPic4,
    figoPic5,
    figoPic6,
    figoPic7,
    figoPic8,
    figoPic9,
  ];
  console.log("Rendering FigoRest, images:", images);

  return (
    <div className={css.mainContainer}>
      <section className={css.aboutApp}>
        <h1> Figo Restaurant </h1>
        <ParagraphNight>
          <p>{figoDescription.figoDescription}</p>
        </ParagraphNight>
      </section>
      <GoToGithub to="https://github.com/CristinaSt86/Figo-Restaurant" />
      <section>
        <LightboxGallery images={images} />
      </section>
    </div>
  );
};

export default FigoRest;
