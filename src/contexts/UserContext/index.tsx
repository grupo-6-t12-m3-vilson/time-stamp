import { createContext, ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({});

const UserProvider = ({ children }: UserProviderProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
export default UserProvider;
