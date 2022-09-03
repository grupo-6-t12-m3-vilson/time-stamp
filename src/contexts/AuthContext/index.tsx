import { createContext, ReactNode, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({});

const AuthProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
