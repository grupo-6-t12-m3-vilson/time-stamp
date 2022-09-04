import { createContext, ReactNode, useState } from "react";

interface UserProviderProps {
  children: ReactNode;
}

interface ICard {
  module: string;
  dia: string;
  sprint: number;
}

interface UserContext {
  card: ICard[];
  clearUrl: () => void;
  toggleModalVisibility: () => void;
  urlValue: string
  setUrlValue: (value: string) => void;
  modalEditVideoIsOpen: boolean;
 
 
}

export const UserContext = createContext({} as UserContext);

const UserProvider = ({ children }: UserProviderProps) => {
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


  
  
  return (
    <UserContext.Provider value={ {card , clearUrl, toggleModalVisibility, urlValue, setUrlValue, modalEditVideoIsOpen} }>{children}</UserContext.Provider>
  );
};
export default UserProvider;
