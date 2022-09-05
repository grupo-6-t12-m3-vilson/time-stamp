import styled from "styled-components";

export const MainContainer = styled.main`
  width: 90%;
  margin: 2rem auto;

  #divSprint {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 1rem;
    background-color: #d3e0f0;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media (max-width: 1024px) {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }

    h1 {
      font-size: 1.25rem;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      color: #232a43;
    }

    #divShow {
      font-size: 30px;
      display: none;
      cursor: pointer;

      @media (max-width: 1024px) {
        display: flex;
        flex-direction: row-reverse;
      }
    }

    #divClose {
      font-size: 30px;
      display: none;
      cursor: pointer;

      @media (max-width: 1024px) {
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }
`;

interface NavProps {
  sideBar: boolean;
}

export const AsideDate = styled.aside<NavProps>`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex-direction: column;
    position: fixed;
    top: 10%;
    right: ${(props) => (props.sideBar ? "0" : "-100%")};
    width: 30%;
    margin: 4% auto;
    background-color: #d3e0f0;
    transition: 0.5s;

    a {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 100px;
    }
  }

  @media (max-width: 425px) {
    width: 300px;
    margin: 8% auto;
  }
`;
