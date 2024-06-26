import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";

import { getToken, setToken, deleteToken } from "./localStorage";
import axios from "../../services/axios";

export type User = {
  userId?: string;
  name?: string;
  email?: string;
  token: string;
  ehAdm: boolean;
};

type AuthContextType = {
  user: User | null;
  usuarioAutenticado: boolean;
  isLoggedIn: boolean;
  isProfessor: boolean;
  loginUser: (userPayload: User) => void;
  logoutUser: () => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<AuthContextType["isLoggedIn"]>(
    () => !!getToken()
  );
  const [isProfessor, setIsProfessor] = useState<
    AuthContextType["isProfessor"]
  >(() => !!getToken()?.ehAdm);

  const loginUser = useCallback<AuthContextType["loginUser"]>(
    (userPayload: User) => {
      setToken(userPayload);
      axios.defaults.headers.common.Authorization = `Bearer ${userPayload.token}`;
      setUser(userPayload);
      setIsLoggedIn(true);
      // setIsProfessor(userPayload.ehAdm);
    },
    []
  );

  const logoutUser = useCallback<AuthContextType["logoutUser"]>(() => {
    deleteToken();
    axios.defaults.headers.common.Authorization = "";
    setUser(null);
    setIsLoggedIn(false);

    setIsProfessor(false);
  }, []);

  useEffect(() => {
    const userPayload = getToken();

    if (userPayload) {
      setUser(userPayload);
      axios.defaults.headers.common.Authorization = `Bearer ${userPayload.token}`;
    }
  }, []);

  const contextValue = useMemo<AuthContextType>(
    () => ({
      user,
      usuarioAutenticado: !!user,
      isLoggedIn,
      isProfessor,
      loginUser,
      logoutUser,
    }),
    [user, isLoggedIn, isProfessor, loginUser, logoutUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
