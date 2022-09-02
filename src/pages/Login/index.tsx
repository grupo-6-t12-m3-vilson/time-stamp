import React, { useEffect, useRef, useState } from "react";

import { ContentIntro, FormContent, FormSign, SignInContainer } from "./styles";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { ReactComponent as Intro } from "../../assets/intro.svg";
import { parseClassName } from "react-toastify/dist/utils";

function SignIn() {
  const [typePassword, setTypePassword] = useState("password");
  const [password, setPassword] = useState("");
  const passwordRef = useRef<HTMLInputElement | null>(null);

  function showPassword() {
    typePassword === "password"
      ? setTypePassword("text")
      : setTypePassword("password");
  }

  return (
    <SignInContainer>
      <ContentIntro>
        <FormContent>
          <div>
            <h2>Seja, bem vindo(a)!</h2>
          </div>
          <FormSign>
            <input type="text" name="" placeholder="email" autoFocus />
            <div>
              <input
                type={typePassword}
                name="password"
                ref={(passwordRef) => {
                  if (passwordRef) {
                    passwordRef.focus();
                  }
                }}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  showPassword();
                }}
                autoFocus={false}
              >
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

export default SignIn;
