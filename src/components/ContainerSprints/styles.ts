import styled from "styled-components";

export const MainContainer = styled.main`  
  width: 100%;
  max-width: 1521px;
  height: 505px;
  margin: 68px auto 45px;

  #divSprint {
    display: flex;
    align-items: center;

    width: 100%;
    height: 60px;
    max-width: 1503px;
    margin: 18px 9px;

    background-color: #d3e0f0;
    border-radius: 3%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    h1 {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 700;
      line-height: 33px;
      letter-spacing: 0.05em;
      margin-left: 46px;

      color: #232a43;
    }

    #divShow {
      font-size: 30px;
      display: none;
      cursor: pointer;

      @media (max-width: 560px) {
        display: flex;
        flex-direction: row-reverse;
      }
    }

    #divClose {
      font-size: 30px;
      display: none;
      cursor: pointer;

      @media (max-width: 560px) {
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }

  section{
    display: flex;
  }
`;

interface NavProps {
  sideBar: boolean;
}
export const NavDate = styled.nav<NavProps>`
  display: flex;
  flex-direction: column;
  margin: 0 45px;

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: FFFFF;
    position: fixed;
    height: 100%;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sideBar ? '0' : '-100%'};
    transition: 0.5s;

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

