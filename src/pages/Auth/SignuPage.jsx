import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import AuthStyles from "./Auth.module.css";

import ReactIcon from "../../images/react.svg";

import InputField from "../../components/InputField";
import Button from "../../components/Button";

function SignupPage() {
  const [isButtonsDisabled, setIsButtonDisabled] = useState(false);
  let inputRef = useRef(null);

  const inputFieldData = [
    {
      id: 1,
      placeholder: "youremail@gmail.com",
      type: "email",
      label: "Enter your email",
      requried: true,
    },
    {
      id: 2,
      placeholder: "secret password",
      type: "password",
      label: "Enter your password",
      requried: true,
    },
    {
      id: 3,
      placeholder: "secret password again",
      type: "password",
      label: "Re-Enter your password",
      requried: true,
    },
  ];
  const buttonOptions = [
    {
      placeholder: "Signup with JWT",
      type: "primary",
      onClick: () => handleSignup("JWT"),
      className: "btn-primary",
    },
    {
      placeholder: "Signup with cookies",
      type: "secondary",
      onClick: () => handleSignup("cookies"),
      className: "btn-secondary",
    },
    {
      placeholder: "Signup with OAuth",
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
          Old user? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default SignupPage;
