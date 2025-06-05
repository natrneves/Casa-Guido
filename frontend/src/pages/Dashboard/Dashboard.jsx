import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '2rem' }}>
        <h2>Dashboard</h2>
        <p>Resumo geral do sistema.</p>
      </div>
    </div>
  );
}
