import React from "react";
import InputFieldStyle from "./InputField.module.css";
function InputField({ placeholder, type, label, required }) {
  return (
    <div className={InputFieldStyle.container}>
      <label className={InputFieldStyle.label_text}>{label}</label>
      <input placeholder={placeholder} type={type} required={required} />
    </div>
  );
}

export default InputField;
