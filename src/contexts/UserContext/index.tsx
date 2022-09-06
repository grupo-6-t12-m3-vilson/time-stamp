import { createContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import schemaMarkers from "../../utils/schema";
import { IMarkers, IUserContext, IUserProviderProps } from "./interface";
import { api } from "../../services/api";

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [theme, setTheme] = useState<boolean>(true);
  const themeDark = () => {
    setTheme(!theme);
  };

  const [card, setCard] = useState([
    { module: "M3", dia: "05/07/22", sprint: 1 },
    { module: "M3", dia: "12/07/22", sprint: 2 },
    { module: "M3", dia: "21/07/22", sprint: 3 },
    { module: "M3", dia: "28/07/22", sprint: 4 },
    { module: "M3", dia: "05/08/22", sprint: 5 },
    { module: "M3", dia: "12/08/22", sprint: 6 },
    { module: "M3", dia: "19/08/22", sprint: 7 },
    { module: "M3", dia: "28/08/22", sprint: 8 },
  ]);

  const [modalEditVideoIsOpen, setModalEditVideoIsOpen] =
    useState<boolean>(false);

  const [markers, setMarkers] = useState<IMarkers[]>([]);
  const [urlValue, setUrlValue] = useState<string>("");
  const [marcadores, setMarcadores] = useState<IMarkers[]>([]);
  const [url, setUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMarkers>({ resolver: yupResolver(schemaMarkers) });

  const clearUrl = () => {
    setUrlValue("");
  };

  const toggleModalVisibility = () => {
    setModalEditVideoIsOpen(!modalEditVideoIsOpen);
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  const jumpShowTime = (time_video: number) => {
    if (videoRef !== null && videoRef.current) {
      videoRef.current.currentTime = time_video;
    }
  };

  const onSubmit = (data: IMarkers) => {
    setMarkers([...markers, data]);
  };

  const exemplo = {
    url: urlValue,
    marks: markers,
    userId: 3,
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im0zQGludHJ1dG9yLmNvbSIsImlhdCI6MTY2MjQ5NjIyNiwiZXhwIjoxNjYyNDk5ODI2LCJzdWIiOiIzIn0.95sWaMYUqNG2l9bukjtKjJtxtdbx0PbALFFS2c7SrMQ";

  function postVideos() {
    toggleModalVisibility();

    api
      .post("/videos", exemplo, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => {
        console.log(res);
        setMarcadores(res.data.marks);
        setUrl(res.data.url);
      })
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider
      value={{
        card,
        theme,
        themeDark,
        clearUrl,
        toggleModalVisibility,
        urlValue,
        setUrlValue,
        modalEditVideoIsOpen,
        videoRef,
        jumpShowTime,
        markers,
        setMarkers,
        onSubmit,
        register,
        handleSubmit,
        errors,
        exemplo,
        postVideos,
        marcadores,
        url,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
