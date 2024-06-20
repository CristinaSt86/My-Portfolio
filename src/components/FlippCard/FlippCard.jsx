import React, { useState } from "react";
import css from "./FlippCard.module.css";
import { useTranslation } from "react-i18next";

const FlippCard = ({ title, description, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useTranslation();

  const handleFlipping = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleFlipping}>
      <div className={`${css.card} ${isFlipped ? css.flipped : ""}`}>
        <div className={css.front}>
          <img src={icon} alt="" className={css.icon} />
          {title}
          {/* <div className={css.flipInstruction}>Click to flip</div> */}
        </div>

        <div className={css.back}>{description}</div>
      </div>
    </div>
  );
};

export default FlippCard;
