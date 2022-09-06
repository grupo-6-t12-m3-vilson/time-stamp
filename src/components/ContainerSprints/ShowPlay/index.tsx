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
 
  const { toggleModalVisibility, modalEditVideoIsOpen,videoRef,showTime,jumpShowTime } =
  useContext(UserContext);
  
  return (
    <>
      <ContainerPlay>
        <DivPlay>
          <video
            src="https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_6/parte_final.mp4"
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
              {showTime.map((time: any) => (
                <li onClick={() => jumpShowTime(time.timeSecunds)}>
                  <p>{time.time}</p>
                  <span>{time.description}</span>
                </li>
              ))}
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
