import React from "react";
import css from "./ServicesPage.module.css";
import ParagraphNight from "../components/ParagraphNight/ParagraphNight";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className={css.mainContainer}>
      <h1 className={css.servicesTitle}>{t("servicesTitle")}</h1>
      <ParagraphNight>
        <dl>
          <dt>{t("customWebDevTitle")}</dt>
          <dd>{t("customWebDevDescription")}</dd>

          <dt>{t("uiUxDesignTitle")}</dt>
          <dd>{t("uiUxDesignDescription")}</dd>

          <dt>{t("spaTitle")}</dt>
          <dd>{t("spaDescription")}</dd>

          <dt>{t("apiIntegrationTitle")}</dt>
          <dd>{t("apiIntegrationDescription")}</dd>

          <dt>{t("formHandlingTitle")}</dt>
          <dd>{t("formHandlingDescription")}</dd>

          <dt>{t("performanceOptTitle")}</dt>
          <dd>{t("performanceOptDescription")}</dd>

          <dt>{t("versionControlTitle")}</dt>
          <dd>{t("versionControlDescription")}</dd>
        </dl>
      </ParagraphNight>
      <h2 className={css.servicesTitle}>{t("additionalServicesTitle")}</h2>
      <ParagraphNight>
        <dl>
          <dt>{t("thirdPartyIntegrationTitle")}</dt>
          <dd>{t("thirdPartyIntegrationDescription")}</dd>

          <dt>{t("maintenanceTitle")}</dt>
          <dd>{t("maintenanceDescription")}</dd>
        </dl>
      </ParagraphNight>
      <h2 className={css.servicesTitle}>{t("limitationsTitle")}</h2>

      <ParagraphNight>
        <p>{t("limitationsDescription")}</p>
      </ParagraphNight>
    </div>
  );
};

export default Services;
