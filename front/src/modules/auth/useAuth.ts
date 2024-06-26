import { useContext } from "react";

import { AuthContext } from "./AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("You need to use the AuthProvider");
  }
  return context;
};
