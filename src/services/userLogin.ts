import { api } from "./api";

export interface UserLoginProps {
  email: string;
  password: string;
}

export interface User {
  email: string;
  name: string;
  module: number;
  isAdmin: boolean;
  id: number;
}

export interface UserLoginResponse {
  accessToken: string;
  user: User;
}

export async function userLogin(
  userData: UserLoginProps
): Promise<UserLoginResponse> {
  const { email, password } = userData;
  const { data } = await api.post("/login", {
    email,
    password,
  });
  return data;
}
