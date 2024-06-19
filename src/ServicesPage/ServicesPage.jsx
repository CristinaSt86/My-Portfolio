import React from "react";
import css from "./ServicesPage.module.css";
import { useTranslation } from "react-i18next";
import FlippCard from "../components/FlippCard/FlippCard";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "customWebDev",
      title: t("customWebDevTitle"),
      description: t("customWebDevDescription"),
    },
    {
      key: "uiUxDesign",
      title: t("uiUxDesignTitle"),
      description: t("uiUxDesignDescription"),
    },
    { key: "spa", title: t("spaTitle"), description: t("spaDescription") },
    {
      key: "apiIntegration",
      title: t("apiIntegrationTitle"),
      description: t("apiIntegrationDescription"),
    },
    {
      key: "formHandling",
      title: t("formHandlingTitle"),
      description: t("formHandlingDescription"),
    },
    {
      key: "performanceOpt",
      title: t("performanceOptTitle"),
      description: t("performanceOptDescription"),
    },
    {
      key: "versionControl",
      title: t("versionControlTitle"),
      description: t("versionControlDescription"),
    },
    {
      key: "thirdPartyIntegration",
      title: t("thirdPartyIntegrationTitle"),
      description: t("thirdPartyIntegrationDescription"),
    },
    {
      key: "maintenance",
      title: t("maintenanceTitle"),
      description: t("maintenanceDescription"),
    },
    {
      key: "limitations",
      title: t("limitationsTitle"),
      description: t("limitationsDescription"),
    },
  ];

  return (
    <div className={css.services}>
      <h1 className={css.servicesTitle}>{t("servicesTitle")}</h1>
      <div className={css.mainContainer}>
        {services.map((service) => (
          <FlippCard
            key={service.key}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
