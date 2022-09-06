import { createContext, ReactNode, useRef, useState } from "react";
import { IShowTime, IUserContext, IUserProviderProps } from "./interface";

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

  const [urlValue, setUrlValue] = useState<string>("");
  const [modalEditVideoIsOpen, setModalEditVideoIsOpen] =
    useState<boolean>(false);

  const clearUrl = () => {
    setUrlValue("");
  };

  const toggleModalVisibility = () => {
    setModalEditVideoIsOpen(!modalEditVideoIsOpen);
  };

  const shows = [
    {
      timeSecunds: 1000,
      time: "00:16:40",
      description: "useState",
    },
    {
      timeSecunds: 2500,
      time: "00:41:40",
      description: "useRef",
    },
    {
      timeSecunds: 1700,
      time: "00:28:20",
      description: "useContext",
    },
  ];

  const [showTime, setShowTime] = useState<IShowTime[]>(shows); 
  const videoRef = useRef<HTMLVideoElement>(null);

  const jumpShowTime = (time_video: number) => {
    if (videoRef !== null && videoRef.current) {
      videoRef.current.currentTime = time_video;
    }
  };


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
        showTime,
        jumpShowTime
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
