import { useContext, useRef, useState } from "react";
import { BsFileEarmarkPlay } from "react-icons/bs";

import { UserContext } from "../../../contexts/UserContext";
import ModalAddVideo from "../../ModalAddvideo";

import {
  ContainerPlay,
  DivAddVideo,
  DivBox,
  DivExtra,
  DivInfo,
  DivPlay,
  UlDetails,
} from "./styles";

const ShowPlay = () => {
  const {
    toggleModalVisibility,
    modalEditVideoIsOpen,
    url,
    marcadores,
    videoRef,
    jumpShowTime,
  } = useContext(UserContext);

  return (
    <>
      <ContainerPlay>
        <DivPlay>
          <video
            /*    src="https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_6/parte_final.mp4" */
            src={url}
            controls
            ref={videoRef}
          />
        </DivPlay>
        <DivBox>
          <DivExtra>
            <h2>Extra</h2>
          </DivExtra>
          <DivInfo>
            <UlDetails>
              {marcadores.map((marks, index) => (
                <li onClick={() => jumpShowTime(marks.time_video)} key={index}>
                  <p>{marks.time_video}</p>
                  <span>{marks.title}</span>
                </li>
              ))}
              {/*  <li>
                <p>03:21</p>
                <span>Conceito componentização no react</span>
              </li>
              <li>
                <p>06:30</p>
                <span>introdução a useState</span>
              </li>
              <li>
                <p>15:52</p>
                <span>useState na prática</span>
              </li>
              <li>
                <p>23:19</p>
                <span>React - imutabilidade</span>
              </li>
              <li>
                <p>37:52</p>
                <span>Ciclo de vida de um componente </span>
              </li>
              <li>
                <p>49:43</p>
                <span>Tira dúvidas</span>
              </li>
              <li>
                <p>01:05:21</p>
                <span>Reusabilidade, reaproveitamento de código e etc</span>
              </li> */}
            </UlDetails>
          </DivInfo>
          <DivAddVideo>
            <button onClick={toggleModalVisibility}>
              <BsFileEarmarkPlay />
            </button>
          </DivAddVideo>
        </DivBox>
      </ContainerPlay>
      {modalEditVideoIsOpen && <ModalAddVideo />}
    </>
  );
};

export default ShowPlay;
