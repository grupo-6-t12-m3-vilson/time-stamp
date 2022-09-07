import { api } from "./api";

export interface UserLoginProps {
  email: string;
  password: string;
}

export interface User {
  email: string;
  name: string;
  module: number | string;
  isAdmin: boolean;
  id: number | string;
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
