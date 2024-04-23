import React, { useState } from "react";
import css from "./FloatingLabel.module.css";

const FloatingLabel = ({
  id,
  name,
  type = "text",
  placeholder,
  isTextArea,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setIsFocused(false);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => setValue(e.target.value);

  const labelClass = isFocused || value ? "placeholder float" : "placeholder";

  const inputElement = isTextArea ? (
    <textarea
      id={id}
      name={name}
      placeholder={!value && isFocused ? placeholder : ""}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
      required
    />
  ) : (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={!value && isFocused ? placeholder : ""}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
      required
    />
  );

  return (
    <div className={css.floatingLabelGroup}>
      {inputElement}
      <label htmlFor={id} className={labelClass}>
        {placeholder}
      </label>
    </div>
  );
};

export default FloatingLabel;
