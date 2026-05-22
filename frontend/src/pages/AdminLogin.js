import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate('/dashboard');
    }
  };

  return (
    <div style={container}>

      <div style={card}>

        <h1 style={title}>
          Admin Login
        </h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={input}
          />

          <button style={button}>
            Login
          </button>

        </form>

        <Link
          to="/employee"
          style={link}
        >
          Employee Login
        </Link>

      </div>

    </div>
  );
}

const container = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background:
    'linear-gradient(135deg,#0f172a,#1e1b4b,#312e81)'
};

const card = {
  width: '350px',
  padding: '40px',
  borderRadius: '20px',
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
};

const title = {
  color: 'white',
  textAlign: 'center',
  marginBottom: '30px'
};

const input = {
  width: '100%',
  padding: '14px',
  marginBottom: '20px',
  borderRadius: '10px',
  border: 'none',
  outline: 'none'
};

const button = {
  width: '100%',
  padding: '14px',
  background: '#6366f1',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const link = {
  display: 'block',
  textAlign: 'center',
  color: '#cbd5e1',
  marginTop: '20px'
};

export default AdminLogin;