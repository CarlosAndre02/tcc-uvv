import { User } from "./AuthContext";

export const getToken = (): User | null => {
  const userPayload = localStorage.getItem("TCC_userTokens");
  return userPayload ? JSON.parse(userPayload) : null;
};

export const setToken = (token: User) => {
  localStorage.setItem("TCC_userTokens", JSON.stringify(token));
};

export const deleteToken = () => {
  localStorage.removeItem("TCC_userTokens");
};
