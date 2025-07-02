import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Estatisticas from "../pages/Estatisticas/Estatisticas";
import PacienteCadastro from "../pages/PacienteCadastro/PacienteCadastro";
import PacienteConsulta from "../pages/PacienteConsulta/PacienteConsulta";
import Login from "../pages/Login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Página inicial = Login */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Páginas dentro do Layout (com Sidebar) */}
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/estatisticas" element={<Layout><Estatisticas /></Layout>} />
      <Route path="/cadastro" element={<Layout><PacienteCadastro /></Layout>} />
      <Route path="/consulta" element={<Layout><PacienteConsulta /></Layout>} />

      {/* Rota curinga */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
