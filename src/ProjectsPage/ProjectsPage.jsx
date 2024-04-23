import React from "react";
import css from "./ProjectsPage.module.css";
import { useNavigate } from "react-router-dom";
import WeatherMini from "../components/WeatherMini/WeatherMini"

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(projectId);
  };

  const projects = [
    { name: "Advice Slip", path: "/advice-slip" },
    { name: "Mini Robot", path: "/joke-teller" },
    { name: "To Do App", path: "/to-do" },
    { name: "Figo Restaurant", path: "/figo-restaurant" },
  ];

  return (
    <div className={css.mainContainer}>
      <div>
        <ul className={css.ulLinks}>
          {projects.map((project, index) => (
            <li key={index}>
              <button
                className={css.links}
                onClick={() => handleProjectClick(project.path)}
              >
                {project.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <WeatherMini />
    </div>
  );
};

export default ProjectsPage;
