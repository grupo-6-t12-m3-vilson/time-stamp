import { createContext, ReactNode, useState } from "react";

interface UserProviderProps {
  children: ReactNode;
}
interface ContextProviderData {
  theme: boolean;
  themeDark: () => void;
}

export const UserContext = createContext({} as ContextProviderData);

const UserProvider = ({ children }: UserProviderProps) => {
  const [theme, setTheme] = useState<boolean>(true);

  const themeDark = () => {
    setTheme(!theme);
  };
  return (
    <UserContext.Provider value={{ theme, themeDark }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
