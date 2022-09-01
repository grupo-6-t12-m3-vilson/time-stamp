import { createContext, ReactNode, useState } from "react";

interface UserProviderProps {
  children: ReactNode;
}

interface ICard {
  module: string;
  dia: string;
  sprint: number;
}

interface IVideos {
  url: string;
  day: string;
  time_video: string;
  title: string;
}

interface UserContext {
  card: ICard[];
  videos: IVideos[];
}

export const UserContext = createContext({} as UserContext);

const UserProvider = ({ children }: UserProviderProps) => {
  //Crie esse useState apenas para mostrar os cards e os videos na tela, na hora que for fazer o definitivo,
  //o que será buscado na API, a lógica será bem similar a isso

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
  const [videos, setVideos] = useState([
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_6/parte_final.mp4",
      day: "25/08",

      time_video: "15:00",
      title: "Falando sobre Typescript",
    },
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_6/parte_final.mp4",
      day: "25/08",

      time_video: "15:00",
      title: "Falando sobre Typescript",
    },
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_6/parte_final.mp4",
      day: "25/08",

      time_video: "15:00",
      title: "Falando sobre Typescript",
    },
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_6/parte_final.mp4",
      day: "25/08",

      time_video: "15:00",
      title: "Falando sobre Typescript",
    },
    {
      url: "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_6/parte_final.mp4",
      day: "25/08",

      time_video: "15:00",
      title: "Falando sobre Typescript",
    },
  ]);

  return (
    <UserContext.Provider value={{ videos, card }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
