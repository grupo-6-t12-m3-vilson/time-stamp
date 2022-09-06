import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
  background: ${(props) => props.theme.containerSprints.background};

  #divSprint {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 1rem;
    background-color: ${(props) =>
      props.theme.containerSprints.background_secondary};
    border-radius: 8px;
    filter: ${(props) => props.theme.containerSprints.box_shadow};

    @media (max-width: 1024px) {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }

    h1 {
      font-size: 1.25rem;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      color: ${(props) => props.theme.containerSprints.font_color_primary};
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
  }

  section {
    display: flex;
    padding: 10px 0;
    background-color: ${(props) => props.theme.containerSprints.background};

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
    margin: 7% 4.8%;
    background-color: ${(props) => props.theme.containerSprints.background};
    border-radius: 0px 0px 10px 10px;
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
    background-color: ${(props) => props.theme.containerSprints.background};
    border-radius: 0px 0px 10px 10px;
  }
`;
