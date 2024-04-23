import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import css from "./App.module.css";
import { useTheme } from "./ThemeContext";
import Image from './components/Image/Image';
import switchDayNight from '../src/images/switchDayNight.png'
import BackButton from './components/BackButton/BackButton';

const HomePage = lazy(() => import("./HomePage/HomePage"));
const AboutPage = lazy(() => import("./AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./ContactPage/ContactPage"));
const ProjectsPage = lazy(() => import("./ProjectsPage/ProjectsPage"));
const AdviceSlipPage = lazy(() => import("./AdviceSlip/AdviceSlip"));
const JokeTellerPage = lazy(() => import("./JokeTeller/JokeTeller"));
const ToDoPage = lazy(() => import("./ToDo/ToDo"));
const FigoRestPage = lazy(() => import("./FigoRest/FigoRest"));

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Image
      src={switchDayNight}
      alt="dayNightSwitch"
      className={css.toggleBtn}
      onClick={toggleTheme}
    />
  );
};

const App = () => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "dark"
          ? `${css.darkTheme} dark-theme`
          : `${css.lightTheme} light-theme`
      }
    >
      <div className={css.themeTogglerContainer}>
        <BackButton />
        <Navigation />
        <ThemeToggler />
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/advice-slip" element={<AdviceSlipPage />} />
          <Route path="/joke-teller" element={<JokeTellerPage />} />
          <Route path="/to-do" element={<ToDoPage />} />
          <Route path="/figo-restaurant" element={<FigoRestPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
