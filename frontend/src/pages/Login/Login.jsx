import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você pode colocar autenticação real depois
    if (email && senha) {
      navigate('/dashboard');
    } else {
      alert('Preencha os campos!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="\logo.png" alt="Logo Guido" />
        <h1>Casa Guido</h1>
        <p>Portal de Gestão de Pacientes</p>
      </div>

      <div className="login-box">
        <h2>Acesso ao Portal</h2>
        <p>Digite suas credenciais para acessar o portal</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
