import React, { useEffect, useRef, useState } from "react";

import { ContentIntro, FormContent, FormSign, SignInContainer } from "./styles";
import { FiEye, FiEyeOff } from "react-icons/fi";
import HeaderComponent from "../../components/HeaderComponent";
import { ReactComponent as Intro } from "../../assets/intro.svg";

function Login() {
  const [typePassword, setTypePassword] = useState("password");
  const [password, setPassword] = useState("");

  function showPassword() {
    typePassword === "password"
      ? setTypePassword("text")
      : setTypePassword("password");
  }

  return (
    <SignInContainer>
      <HeaderComponent />
      <ContentIntro>
        <FormContent>
          <div>
            <h2>Seja, bem vindo(a)!</h2>
          </div>
          <FormSign>
            <input type="email" name="" placeholder="email" autoFocus />
            <div>
              <input
                type={typePassword}
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={showPassword}>
                {typePassword === "password" ? (
                  <FiEye width={40} color="#fff" />
                ) : (
                  <FiEyeOff width={40} color="#fff" />
                )}
              </button>
            </div>
            <button type="submit">Login</button>
          </FormSign>
        </FormContent>
        <Intro width="90vh" />
      </ContentIntro>
    </SignInContainer>
  );
}

export default Login;
