import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Estatisticas from '../pages/Estatisticas/Estatisticas';
import PacienteCadastro from '../pages/PacienteCadastro/PacienteCadastro';
import PacienteConsulta from '../pages/PacienteConsulta/PacienteConsulta';

// Layout
import Layout from '../components/Layout/Layout';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Páginas internas com (Sidebar) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/estatisticas" element={<Estatisticas />} />
          <Route path="/paciente/cadastro" element={<PacienteCadastro />} />
          <Route path="/paciente/consulta" element={<PacienteConsulta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
