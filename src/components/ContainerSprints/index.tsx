import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { AsideDate, MainContainer } from "./styles";
import ShowPlay from "./ShowPlay/index";
import NavDay from "./NavDay";

const ContainerSprints = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSiderBar = () => setSideBar(!sideBar);
  return (
    <>
      <MainContainer>
        <div id="divSprint">
          <h1>SPRINT 1</h1>
          <div id="divShow">
            <FaBars
              style={{ display: sideBar === true ? "none" : "flex" }}
              onClick={showSiderBar}
            />
          </div>
        </div>
        <section>
          <AsideDate sideBar={sideBar}>
            <div
              id="divClose"
              style={{ display: sideBar === true ? "flex" : "none" }}
            >
              <FaTimes onClick={showSiderBar} />
            </div>
            <NavDay />
          </AsideDate>
          <ShowPlay />
        </section>
      </MainContainer>
    </>
  );
};

export default ContainerSprints;
