import React, { useState } from "react";
import css from "./Form.module.css";
import { useTheme } from "../../ThemeContext";
import FloatingLabel from "../FloatingLabel/FloatingLabel";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const { theme } = useTheme();
  const formBgDarkMode =
    theme === "dark" ? `${css.form}  ${css.formNight}` : css.form;

  return (
    <form onSubmit={handleSubmit} className={formBgDarkMode}>
      <FloatingLabel
        id="name"
        name="name"
        type="text"
        maxLength="50"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <FloatingLabel
        id="email"
        name="email"
        type="email"
        maxLength="50"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <FloatingLabel
        id="message"
        name="message"
        maxLength="500"
        placeholder="Design purpose only - functionality disabled."
        isTextArea={true}
        value={formData.message}
        onChange={handleInputChange}
      />
      <button type="submit" className={css.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default Form;
