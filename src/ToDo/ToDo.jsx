import React from "react";
import css from "./ToDo.module.css";
import toDoDescription from "./toDoDescription.json";
import GoToGithub from "../components/GoToGithub/GoToGithub";
import { LightboxGallery } from "../components/LightboxGallery/LightboxGallery";
import Todo1 from "../images/Todo1.jpg";
import Todo2 from "../images/Todo2.jpg";
import Todo3 from "../images/Todo3.jpg";
import Todo4 from "../images/Todo4.jpg";
import ParagraphNight from "../components/ParagraphNight/ParagraphNight";

const ToDo = () => {
  const images = [Todo1, Todo2, Todo3, Todo4];

  return (
    <div className={css.mainContainer}>
      <section className={css.aboutApp}>
        <h1> To Do App </h1>
        <ParagraphNight>
          <p>{toDoDescription.toDoDescription}</p>
        </ParagraphNight>
      </section>
      <GoToGithub to="https://github.com/CristinaSt86/TodoApp" />
      <section>
        <LightboxGallery images={images} />
      </section>
    </div>
  );
};

export default ToDo;
