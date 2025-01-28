import React from "react";
import { useState, useRef } from "react";

import { Link } from "react-router";

import AuthStyles from "./Auth.module.css";

import ReactIcon from "../../images/react.svg";

import InputField from "../../components/InputField";
import Button from "../../components/Button";

function LoginPage() {
  const [isButtonsDisabled, setIsButtonDisabled] = useState(false);
  let inputRef = useRef(null);

  const inputFieldData = [
    {
      id: 1,
      placeholder: "Enter your email",
      type: "email",
      label: "Enter you email",
      requried: true,
    },
    {
      id: 2,
      placeholder: "ex-Password@123",
      type: "password",
      label: "Enter you password",
      requried: true,
    },
  ];
  const buttonOptions = [
    {
      placeholder: "Login with JWT",
      type: "primary",
      onClick: () => handleSignup("JWT"),
      className: "btn-primary",
    },
    {
      placeholder: "Login with cookies",
      type: "secondary",
      onClick: () => handleSignup("cookies"),
      className: "btn-secondary",
    },
    {
      placeholder: "Login with OAuth",
      type: "tertiary",
      onClick: () => handleSignup("OAuth"),
      className: "btn-tertiary",
    },
  ];

  return (
    <div className={AuthStyles.container}>
      <div className={AuthStyles.form}>
        <h1>
          React-Auth <img src={ReactIcon} />
        </h1>
        <form>
          {inputFieldData.map((element) => {
            return (
              <InputField
                placeholder={element.placeholder}
                type={element.type}
                label={element.label}
              />
            );
          })}
          <div className={AuthStyles.buttons_container}>
            {buttonOptions.map((element) => {
              return <Button placeholder={element.placeholder} />;
            })}
          </div>
        </form>
        <span>
          New user? <Link to="/">Signup</Link>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
