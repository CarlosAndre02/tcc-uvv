import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicOnlyRoute } from "./PublicRoute";
import { ProfessorRoute } from "./ProfessorRoute";

const SignupPage = lazy(() => import("../modules/auth/SignupPage"));
const LoginPage = lazy(() => import("../modules/auth/LoginPage"));
const ProfessorHome = lazy(() => import("../modules/professor/ProfessorHome"));

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/professor/home" element={<ProfessorHome />} />

    <Route element={<PublicOnlyRoute />}></Route>

    <Route element={<PrivateRoute />}>
      {/* <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/notebook/:id" element={<NotebookPage />} /> */}
    </Route>

    <Route element={<ProfessorRoute />}>
      {/* <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/user/:id" element={<AdminUserPage />} /> */}
    </Route>
  </Routes>
);
