import styled from "styled-components";
import "animate.css";

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  background-color: ${(props) => props.theme.transparent_gray};
  animation: fadeIn 0.3s;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  max-width: 450px;
  height: 50%;
  position: fixed;
  border-radius: 5px;

  background-color: ${(props) => props.theme.modalEditVideo.bg_modal_edit};

  @media screen and (max-width: 586px) {
    width: 100%;
    height: 60%;
  }
`;

export const CloseModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  h2 {
    font-family: "Roboto Mono", monospace;
    color: ${(props) => props.theme.modalEditVideo.font_color_h1};
  }

  svg {
    fill: ${(props) => props.theme.modalEditVideo.font_color_marker};
    cursor: pointer;
  }
`;

export const UrlFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 83%;

  svg {
    fill: ${(props) => props.theme.modalEditVideo.font_color_icon_clear_url};
    cursor: pointer;
  }

  input {
    width: 80%;
    height: 22px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.modalEditVideo.font_color_input};
    background-color: ${(props) => props.theme.modalEditVideo.bg_input_modal};
    border-radius: 2px;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.25rem 0.5rem;

    &:focus {
      border: 1px solid ${(props) => props.theme.modalEditVideo.bg_input_modal};
      outline: none;
    }

    &::placeholder {
      font-size: 0.9rem;
      font-family: "Nunito Sans", sans-serif;
      color: ${(props) =>
        props.theme.modalEditVideo.font_color_input_placeholder};
      font-weight: 700;
    }
  }
`;

export const MarkerFieldContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  width: 80%;
  height: 20%;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 30%;

    input {
      font-family: "Roboto Mono", monospace;
      background-color: ${(props) => props.theme.modalEditVideo.bg_input_modal};
      font-weight: 700;
      color: ${(props) => props.theme.modalEditVideo.font_color_primary_modal};
      border: 1px solid transparent;
      text-align: center;
      border-radius: 5px;
      height: 55%;

      &:focus {
        border: 1px solid
          ${(props) => props.theme.modalEditVideo.bg_input_modal};
        outline: none;
      }

      &::placeholder {
        color: ${(props) =>
          props.theme.modalEditVideo.font_color_primary_modal};
        font-family: "Nunito Sans", sans-serif;
        font-weight: 700;
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 45%;
      font-family: "Noto Sans", sans-serif;
      font-weight: 700;
      color: ${(props) => props.theme.modalEditVideo.font_color_button_modal};
      background-color: ${(props) =>
        props.theme.modalEditVideo.bg_button_modal};
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  textarea {
    width: 62%;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.modalEditVideo.font_color_input};
    background-color: ${(props) => props.theme.modalEditVideo.bg_input_modal};
    padding: 0.25rem;
    border: 1px solid transparent;
    border-radius: 4px;
    resize: none;

    &:focus {
      border: 1px solid ${(props) => props.theme.modalEditVideo.bg_input_modal};
      outline: none;
    }

    &::placeholder {
      color: ${(props) =>
        props.theme.modalEditVideo.font_color_input_placeholder};
    }
  }
`;

export const CreatedMarkersContainer = styled.div`
  width: 80%;
  height: 20%;
  overflow-y: auto;
  position: relative;
/*   display: flex;
  justify-content: center;
  align-items: center; */

  .marker-empty {
    position: absolute;
    top: 10px;
    left: 110px;
    background: #1b4079;
    color: #9aadbf;
    padding: 10px;
    border-radius: 10px;
    font-family: "Nunito", sans-serif;
  }

  ::-webkit-scrollbar {
    width: 9px;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #1b4079;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9aadbf;
    border-radius: 4px;
  }
`;

export const CreatedMarkersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    display: flex;
    max-height: 1.4rem;
    gap: 0.25rem;
    padding-right: 1rem;
    cursor: pointer;

    span {
      width: 30%;
      font-family: "Nunito Sans", sans-serif;
      font-weight: 800;
      color: ${(props) => props.theme.modalEditVideo.font_color_primary_modal};
      text-align: center;
      background-color: ${(props) =>
        props.theme.modalEditVideo.bg_marker_modal};
      border: none;
      border-radius: 8px;
    }

    p {
      width: 70%;
      font-size: 0.7rem;
      font-family: "Roboto Mono", monospace;
      color: ${(props) => props.theme.modalEditVideo.font_color_marker};
      border-radius: 0px 5px 5px 0px;
      border: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0.1rem;
    }
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  font-size: 1.2rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.modalEditVideo.font_color_button_save};
  background-color: ${(props) => props.theme.modalEditVideo.bg_button_save};
  border: none;
  cursor: pointer;
  border-radius: 8px;
`;

export const Input = styled.input`
    width: 73%;
    height: 22px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.modalEditVideo.font_color_input};
    background-color: ${(props) => props.theme.modalEditVideo.bg_input_modal};
    border-radius: 2px;
    border: 1px solid transparent;
    border-radius: 5px;
    margin-right: 13px;
    padding: 0.25rem 0.5rem;

    &:focus {
      border: 1px solid ${(props) => props.theme.modalEditVideo.bg_input_modal};
      outline: none;
    }

    &::placeholder {
      font-size: 0.9rem;
      font-family: "Nunito Sans", sans-serif;
      color: ${(props) =>
        props.theme.modalEditVideo.font_color_input_placeholder};
      font-weight: 700;
    }

`