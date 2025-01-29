import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import AuthStyles from "./Auth.module.css";

import ReactIcon from "../../images/react.svg";


import InputField from "../../components/InputField";
import Button from "../../components/Button";

function SignupPage() {
  const [formData,setFormData] = useState({
    email: "",
    password: "",
    repassword: "",
  })

  const InputFieldData = [
    {
      id: 1,
      placeholder: "youremail@gmail.com",
      type: "email",
      label: "Enter your email",
      requried: true,
      valueObjectKey:'email',
      value:formData.email,
    },
    {
      id: 2,
      placeholder: "secret password",
      type: "password",
      label: "Enter your password",
      requried: true,
      value:formData.password,
      valueObjectKey:'password',
    },
    {
      id: 3,
      placeholder: "secret password again",
      type: "password",
      label: "Re-Enter your password",
      requried: true,
      value:formData.repassword,
      valueObjectKey:'repassword',
    },
  ];
  const buttons = [
    {
      placeholder: "Signup with JWT",
      type: "primary",
      className: "btn-primary",
    },
    {
      placeholder: "Signup with cookies",
      type: "secondary",
      className: "btn-secondary",
    },
    {
      placeholder: "Signup with OAuth",
      type: "tertiary",
      className: "btn-tertiary",
    },
  ];

  function onChangeText(text,field){
    console.log(text,field)
    setFormData({...formData,[field]:text})
  }
  return (
    <div className={AuthStyles.container}>
      <div className={AuthStyles.form}>
        <h1>
          React-Auth <img src={ReactIcon} />
        </h1>
        <form>

          <div className={AuthStyles.buttons_container}>
            {buttons.map((element) => {
              return <Button placeholder={element.placeholder} />;
            })}
          </div>
        </form>
        <span>
          Old user? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default SignupPage;
