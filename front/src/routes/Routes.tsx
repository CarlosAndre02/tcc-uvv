import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicOnlyRoute } from "./PublicRoute";
// import { ProfessorRoute } from "./ProfessorRoute";

// const SignupPage = lazy(() => import("../modules/auth/SignupPage"));
// const LoginPage = lazy(() => import("../modules/auth/LoginPage"));
const TestPage = lazy(() => import("../modules/TestPage"));

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<TestPage />} />

    <Route element={<PublicOnlyRoute />}>
      {/* <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} /> */}
    </Route>

    <Route element={<PrivateRoute />}>
      {/* <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/notebook/:id" element={<NotebookPage />} /> */}
    </Route>

    {/* <Route element={<ProfessorRoute />}>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/user/:id" element={<AdminUserPage />} />
    </Route> */}
  </Routes>
);
