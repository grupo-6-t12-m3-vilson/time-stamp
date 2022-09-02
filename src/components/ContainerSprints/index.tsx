import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MainContainer, NavDate } from "./styles";

import ShowPlay from "./ShowPlay/indes";
import NavDay from "./NavDay";

// import { Container } from './styles';

const ContainerSprints = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSiderBar = () => setSideBar(!sideBar);
  return (
    <>
      <MainContainer>
        <div id="divSprint">
          <h1>SPRINT 1</h1>
          <div id="divShow">
            <FaBars onClick={showSiderBar} />
          </div>
          <div id="divClose" onClick={showSiderBar}>
            <FaTimes />
          </div>
        </div>
        <section>
          <NavDate sideBar={sideBar}>
            <NavDay />
            {/* <NavLink to="/"> */}
            {/* </NavLink> */}
          </NavDate>

          <ShowPlay />
        </section>
      </MainContainer>
    </>
  );
};

export default ContainerSprints;
