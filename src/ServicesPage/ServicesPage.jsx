import React from "react";
import css from "./ServicesPage.module.css";
import { useTranslation } from "react-i18next";
import FlippCard from "../components/FlippCard/FlippCard";
import code from "../images/code.svg";
import edit from "../images/editTool.svg";
import gitBranch from "../images/gitBranch.svg";
import limitations from "../images/limitations.svg";
import network from "../images/network.svg";
import nodes from "../images/nodes.svg";
import rocket from "../images/rocket.svg";
import support from "../images/support.svg";
import website from "../images/website.svg";
import wrench from "../images/wrench.svg";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "customWebDev",
      title: t("customWebDevTitle"),
      description: t("customWebDevDescription"),
      icon: code,
    },
    {
      key: "uiUxDesign",
      title: t("uiUxDesignTitle"),
      description: t("uiUxDesignDescription"),
      icon: edit,
    },
    {
      key: "spa",
      title: t("spaTitle"),
      description: t("spaDescription"),
      icon: nodes,
    },
    {
      key: "apiIntegration",
      title: t("apiIntegrationTitle"),
      description: t("apiIntegrationDescription"),
      icon: network,
    },
    {
      key: "formHandling",
      title: t("formHandlingTitle"),
      description: t("formHandlingDescription"),
      icon: website,
    },
    {
      key: "performanceOpt",
      title: t("performanceOptTitle"),
      description: t("performanceOptDescription"),
      icon: rocket,
    },
    {
      key: "versionControl",
      title: t("versionControlTitle"),
      description: t("versionControlDescription"),
      icon: gitBranch,
    },
    {
      key: "thirdPartyIntegration",
      title: t("thirdPartyIntegrationTitle"),
      description: t("thirdPartyIntegrationDescription"),
      icon: support,
    },
    {
      key: "maintenance",
      title: t("maintenanceTitle"),
      description: t("maintenanceDescription"),
      icon: wrench,
    },
    {
      key: "limitations",
      title: t("limitationsTitle"),
      description: t("limitationsDescription"),
      icon: limitations,
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
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
