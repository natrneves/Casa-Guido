import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/estatisticas">Estatísticas</Link></li>
          <li><Link to="/paciente/cadastro">Cadastro de Paciente</Link></li>
          <li><Link to="/paciente/consulta">Consulta de Paciente</Link></li>
        </ul>
      </nav>
    </div>
  );
}
