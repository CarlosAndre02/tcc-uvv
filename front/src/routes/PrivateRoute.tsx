import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../modules/auth/useAuth";

export function PrivateRoute() {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Outlet /> : <Navigate to={"/"} />;
}
