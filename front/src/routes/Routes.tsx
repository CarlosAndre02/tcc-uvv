import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicOnlyRoute } from "./PublicRoute";
import { ProfessorRoute } from "./ProfessorRoute";

const SignupPage = lazy(() => import("../modules/auth/SignupPage"));
const LoginPage = lazy(() => import("../modules/auth/LoginPage"));
const ProfessorHome = lazy(() => import("../modules/professor/ProfessorHome"));
const ProfessorForm = lazy(() => import("../modules/professor/ProfessorForm"));
const ProfessorAvaliar = lazy(
  () => import("../modules/professor/ProfessorAvaliar")
);
const AlunoHome = lazy(() => import("../modules/aluno/AlunoHome"));
const AlunoPerfil = lazy(() => import("../modules/aluno/AlunoPerfil"));
const AlunoTarefa = lazy(() => import("../modules/aluno/AlunoTarefa"));
const AlunoClassificacao = lazy(() => import("../modules/aluno/AlunoClassificacao"));
const AlunoPremio = lazy(() => import("../modules/aluno/AlunoPremio"));

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/professor/home" element={<ProfessorHome />} />
    <Route path="/professor/tarefa" element={<ProfessorForm />} />
    <Route path="/professor/avaliar" element={<ProfessorAvaliar />} />
    <Route path="/aluno/home" element={<AlunoHome />} />
    <Route path="/aluno/perfil" element={<AlunoPerfil />} />
    <Route path="/aluno/tarefa" element={<AlunoTarefa />} />
    <Route path="/aluno/classificacao" element={<AlunoClassificacao />} />
    <Route path="/aluno/premio" element={<AlunoPremio />} />

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
