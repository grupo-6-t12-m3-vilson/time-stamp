import React, { useContext, useRef, useState } from "react";
import { BsFileEarmarkPlay } from "react-icons/bs";

import {
  ContainerPlay,
  DivAddVideo,
  DivBox,  
  DivExtra,
  DivInfo,
  DivPlay,
  UlDetails,
} from "./styles";
import { UserContext } from "../../../contexts/UserContext";
import ModalAddVideo from "../../ModalAddvideo";



const ShowPlay = () => {  

  const { toggleModalVisibility, modalEditVideoIsOpen } =
    useContext(UserContext); 

  return (
    <>
      <ContainerPlay>
        <DivPlay>
          <video
            src="https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_6/parte_final.mp4"
            controls            
          />          
        </DivPlay>
        <DivBox>
          <DivExtra>
            <h2>Extra</h2>
          </DivExtra>
          <DivInfo>
            <UlDetails>              
                <li>
                  <p>12:00</p>
                  <span>useState</span>
                </li>              
            </UlDetails>
            <DivAddVideo>
              <button onClick={toggleModalVisibility}>
                <BsFileEarmarkPlay />
              </button>
            </DivAddVideo>
          </DivInfo>
        </DivBox>
      </ContainerPlay>
      {modalEditVideoIsOpen && <ModalAddVideo />}
    </>
  );
};

export default ShowPlay;
