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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

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
  theme === "dark"
    ? `${css.form}  ${css.formNight}`
    : css.form;


  return (
   
    <form onSubmit={handleSubmit} className={formBgDarkMode}>
      <FloatingLabel
        id='name'
        name='name'
        type="text"
        maxLength="50"
        placeholder='Name'
      />
         <FloatingLabel
        id='email'
        name='email'
        type="email"
        maxLength="50"
        placeholder='Email'
      />
         <FloatingLabel
        id='message'
        name='message'
        maxLength="300"
        placeholder='Type your message here...'
        isTextArea={true}
      />
      {/* <label htmlFor="name" className={css.label}>
        Name: 
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder=" name"
          className={css.input}
        />
      </label>
      <label htmlFor="email" className={css.label}>
        E-mail: 
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder=" email"
          className={css.input}
        />
      </label>
      <label htmlFor="message" className={css.label}>
        <textarea
          type="text"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          cols="30"
          rows="10"
          placeholder=" Type your message here..."
          className={css.textarea}
        >
         
        </textarea>
      </label> */}
      <button type="submit" className={css.submitButton}>Submit</button>
    </form>
   
  );
};

export default Form;
