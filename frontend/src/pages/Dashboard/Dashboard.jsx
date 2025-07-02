import React from "react";
import "./Dashboard.css";
import { User, LayoutDashboard, Search, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Visão geral dos pacientes da Casa Guido</p>

      {/* Cards de Métricas */}
      <div className="cards">
        <div className="card">
          <User className="icon pink" />
          <div>
            <h3>127</h3>
            <p>Total de Pacientes</p>
            <span>Pacientes cadastrados</span>
          </div>
        </div>
        <div className="card">
          <LayoutDashboard className="icon green" />
          <div>
            <h3>89</h3>
            <p>Pacientes Ativos</p>
            <span>Em acompanhamento</span>
          </div>
        </div>
        <div className="card">
          <Search className="icon yellow" />
          <div>
            <h3>38</h3>
            <p>Pacientes Inativos</p>
            <span>Não estão em acompanhamento</span>
          </div>
        </div>
        <div className="card">
          <Plus className="icon blue" />
          <div>
            <h3>12</h3>
            <p>Novos Este Mês</p>
            <span>Cadastrados em Dezembro</span>
          </div>
        </div>
      </div>

      {/* Blocos Secundários */}
      <div className="blocks">
        {/* Atividade Recente */}
        <div className="activity">
          <h3>Atividade Recente</h3>
          <p>Últimas ações no sistema</p>
          <ul>
            <li>
              <strong>Novo paciente cadastrado</strong>
              <span>Maria Silva</span>
              <time>2 horas atrás</time>
            </li>
            <li>
              <strong>Dados atualizados</strong>
              <span>João Santos</span>
              <time>4 horas atrás</time>
            </li>
            <li>
              <strong>Consulta realizada</strong>
              <span>Ana Costa</span>
              <time>6 horas atrás</time>
            </li>
            <li>
              <strong>Novo diagnóstico</strong>
              <span>Pedro Lima</span>
              <time>1 dia atrás</time>
            </li>
          </ul>
        </div>

        {/* Distribuição por Idade */}
        <div className="age-distribution">
          <h3>Distribuição por Idade</h3>
          <p>Faixas etárias dos pacientes</p>
          <div className="bar">
            <span>0–5 anos</span>
            <div className="progress purple" style={{ width: "80%" }} />
            <span>32 pacientes</span>
          </div>
          <div className="bar">
            <span>6–10 anos</span>
            <div className="progress blue" style={{ width: "70%" }} />
            <span>28 pacientes</span>
          </div>
          <div className="bar">
            <span>11–15 anos</span>
            <div className="progress orange" style={{ width: "90%" }} />
            <span>35 pacientes</span>
          </div>
          <div className="bar">
            <span>16–18 anos</span>
            <div className="progress violet" style={{ width: "80%" }} />
            <span>32 pacientes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
