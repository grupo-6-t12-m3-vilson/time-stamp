import React from "react";

import { SignInContainer } from "./styles";

import { ReactComponent as Intro } from "../../assets/intro.svg";

function SignIn() {
  return (
    <SignInContainer>
      <section className="content_intro">
        <div className="form_content">
          <div>
            <h2>Seja bem vindo(a)!</h2>
          </div>
          <form className="form_sign">
            <input type="text" name="" placeholder="email" />
            <input type="text" name="" placeholder="password" />
            <button type="submit">Login</button>
          </form>
        </div>
        <Intro width="90vh" />
      </section>
    </SignInContainer>
  );
}

export default SignIn;
