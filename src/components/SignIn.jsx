import React from "react";
import { signInButton } from "../assets";
const SignIn = () => {
  return (
    <div className="signIn">
      <span>Sign in </span>
      <div className="signInButton">
        <img src={signInButton} alt="signinButton" />
      </div>
    </div>
  );
};

export default SignIn;
