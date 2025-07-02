import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { LayoutDashboard, UserPlus, Search, BarChart, LogOut, Menu } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Botão mobile fixo no topo */}
      <button className="sidebar-toggle" onClick={handleToggleSidebar}>
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src="/logo.png" alt="Logo Casa Guido" className="logo" />
          <div className="title">
            <h1>Casa Guido</h1>
            <p>Portal de Gestão</p>
          </div>
        </div>

        <nav className="menu">
          <h3>Menu Principal</h3>
          <NavLink to="/dashboard" className="nav-item" onClick={closeSidebar}>
            <LayoutDashboard className="icon" />
            Dashboard
          </NavLink>
          <NavLink to="/cadastro" className="nav-item" onClick={closeSidebar}>
            <UserPlus className="icon" />
            Cadastrar Paciente
          </NavLink>
          <NavLink to="/consulta" className="nav-item" onClick={closeSidebar}>
            <Search className="icon" />
            Consultar Pacientes
          </NavLink>
          <NavLink to="/estatisticas" className="nav-item" onClick={closeSidebar}>
            <BarChart className="icon" />
            Estatísticas
          </NavLink>
        </nav>

        <div className="user-footer">
          <div className="user-info">
            <div className="avatar" />
            <div>
              <strong>Administrador</strong>
              <p>admin@casaguido.org</p>
            </div>
          </div>
          <button className="logout">
            <LogOut className="icon" />
            Sair
          </button>
        </div>
      </aside>
    </>
  );
}
