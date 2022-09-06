import { ReactNode, useState } from "react";
import AuthProvider from "../contexts/AuthContext";
import UserProvider from "../contexts/UserContext";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

export default Provider;
