import { useContext, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { UserContext } from "../../contexts/UserContext";

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
  const {
    toggleModalVisibility,
    clearUrl,
    urlValue,
    setUrlValue,
    handleSubmit,
    onSubmit,
    register,
    markers,
    exemplo,
    postVideos,
  } = useContext(UserContext);

  return (
    <>
      <ModalContainer>
        <Modal>
          <CloseModalContainer>
            <h2>Faça suas alterações aqui</h2>
            <AiOutlineClose onClick={toggleModalVisibility} />
          </CloseModalContainer>
          <UrlFieldContainer>
            <AiOutlineCloseCircle size={25} onClick={clearUrl} />
            <input
              type="text"
              placeholder="URL :"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
            />
          </UrlFieldContainer>

          <MarkerFieldContainer onSubmit={handleSubmit(onSubmit)}>
            <textarea
              placeholder="Descrição:"
              {...register("title")}
            ></textarea>
            <div>
              <input
                type="text"
                placeholder="tempo"
                {...register("time_video")}
              />
              <button type="submit">Enviar</button>
            </div>
          </MarkerFieldContainer>

          <CreatedMarkersContainer>
            <CreatedMarkersList>
              {markers.map((mark, index) => (
                <li key={index}>
                  <span>{mark.time_video}</span>
                  <p>{mark.title}</p>
                </li>
              ))}
              {/*  <li>
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
              </li> */}
            </CreatedMarkersList>
          </CreatedMarkersContainer>
          <SaveButton type="submit" onClick={postVideos}>
            Salvar
          </SaveButton>
        </Modal>
      </ModalContainer>
    </>
  );
};

export default ModalAddVideo;
