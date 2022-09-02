import { useState } from "react";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

import {
  CloseModalContainer,
  CreatedMarkersContainer,
  CreatedMarkersList,
  MarkerFieldContainer,
  Modal,
  ModalContainer,
  SaveButton,
  UrlFieldContainer,
} from "./styles";

const ModalAddVideo = () => {
  const [urlValue, setUrlValue] = useState<string>("");
  const [modalEditVideoIsOpen, setModalEditVideoIsOpen] =
    useState<boolean>(false);

  const clearUrl = () => {
    setUrlValue("");
  };

  const toggleModalVisibility = () => {
    setModalEditVideoIsOpen(!modalEditVideoIsOpen);
  };

  return (
    <>
      {modalEditVideoIsOpen ? (
        <ModalContainer>
          <Modal>
            <CloseModalContainer>
              <h2>Faça suas alterações aqui</h2>
              <AiOutlineClose
                color="#fff"
                cursor="pointer"
                onClick={toggleModalVisibility}
              />
            </CloseModalContainer>
            <UrlFieldContainer>
              <AiOutlineCloseCircle
                size={25}
                cursor="pointer"
                color={"#D7D9CE"}
                onClick={clearUrl}
              />

              <input
                type="text"
                placeholder="URL :"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
              />
            </UrlFieldContainer>
            <MarkerFieldContainer>
              <textarea placeholder="Descrição:"></textarea>
              <div>
                <input type="text" placeholder="07:32" />
                <button type="button">Enviar</button>
              </div>
            </MarkerFieldContainer>
            <CreatedMarkersContainer>
              <CreatedMarkersList>
                <li>
                  <span>07:22</span>
                  <p>useEffect e suas dependências</p>
                </li>
                <li>
                  <span>25:19</span>
                  <p>useEffect e useCallback</p>
                </li>
                <li>
                  <span>36:47</span>
                  <p>useEffect, useState e useRef</p>
                </li>
                <li>
                  <span>52:01</span>
                  <p>useEffect, useRef e useState</p>
                </li>
              </CreatedMarkersList>
            </CreatedMarkersContainer>
            <SaveButton onClick={toggleModalVisibility}>Salvar</SaveButton>
          </Modal>
        </ModalContainer>
      ) : (
        <button onClick={toggleModalVisibility}>Abrir modal</button>
      )}
    </>
  );
};

export default ModalAddVideo;
