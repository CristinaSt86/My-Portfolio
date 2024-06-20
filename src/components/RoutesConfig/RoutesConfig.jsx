import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


const HomePage = lazy(() => import("../../HomePage/HomePage"));
const AboutPage = lazy(() => import("../../AboutPage/AboutPage"));
const ContactPage = lazy(() => import("../../ContactPage/ContactPage"));
const ProjectsPage = lazy(() => import("../../ProjectsPage/ProjectsPage"));
const AdviceSlipPage = lazy(() => import("../../AdviceSlip/AdviceSlip"));
const JokeTellerPage = lazy(() => import("../../JokeTeller/JokeTeller"));
const ToDoPage = lazy(() => import("../../ToDo/ToDo"));
const FigoRestPage = lazy(() => import("../../FigoRest/FigoRest"));
const JoggaInter = lazy(() => import("../../JoggaInter/JoggaInter"));
const ServicesPage = lazy(() => import("../../ServicesPage/ServicesPage"));


const RoutesConfig = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <PageTransition duration={1000}>
            <ErrorBoundary>
              <HomePage />
            </ErrorBoundary>
          </PageTransition>
        }
      />
      <Route
        path="/about"
        element={
          <PageTransition duration={1000}>
            <ErrorBoundary>
              <AboutPage />
            </ErrorBoundary>
          </PageTransition>
        }
      />
      <Route
        path="/contact"
        element={
          <PageTransition duration={1000}>
            <ContactPage />
          </PageTransition>
        }
      />
      <Route
        path="/projects"
        element={
          <PageTransition duration={1000}>
            <ProjectsPage />
          </PageTransition>
        }
      />
      <Route
        path="/advice-slip"
        element={
          <PageTransition duration={1000}>
            <AdviceSlipPage />
          </PageTransition>
        }
      />
      <Route
        path="/joke-teller"
        element={
          <PageTransition duration={1000}>
            <JokeTellerPage />
          </PageTransition>
        }
      />
      <Route
        path="/to-do"
        element={
          <PageTransition duration={1000}>
            <ToDoPage />
          </PageTransition>
        }
      />
      <Route
        path="/figo-restaurant"
        element={
          <PageTransition duration={1000}>
            <FigoRestPage />
          </PageTransition>
        }
      />
      <Route
        path="/jogga-inter"
        element={
          <PageTransition duration={1000}>
            <JoggaInter />
          </PageTransition>
        }
      />
      <Route
        path="/services"
        element={
          <PageTransition duration={1000}>
            <ServicesPage />
          </PageTransition>
        }
      />
  
    </Routes>
  );
};

export default RoutesConfig;
