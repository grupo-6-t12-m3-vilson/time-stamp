import { createContext, ReactNode, useState } from "react";
import { userLogin, UserLoginProps } from "../../services/userLogin";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({});

const AuthProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
