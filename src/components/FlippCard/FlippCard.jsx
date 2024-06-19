import React, { useState } from "react";
import css from "./FlippCard.module.css";
import { useTranslation } from "react-i18next";

const FlippCard = ({ title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useTranslation();

  const handleFlipping = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleFlipping}>
      <div className={`${css.card} ${isFlipped ? css.flipped : ""}`}>
        <div className={css.front}>{title}</div>
        <div className={css.back}>{description}</div>
      </div>
    </div>
  );
};

export default FlippCard;
