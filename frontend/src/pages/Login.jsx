import React, { useState } from 'react';

import {
  Link,
  useNavigate
} from 'react-router-dom';

function EmployeeLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          Employee Login
        </h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
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
          to="/employee-register"
          style={link}
        >
          Don't have an account? Register
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
  width: '400px',
  padding: '40px',
  borderRadius: '20px',
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)'
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
  border: 'none'
};

const button = {
  width: '100%',
  padding: '14px',
  background: '#6366f1',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer'
};

const link = {
  display: 'block',
  textAlign: 'center',
  color: 'white',
  marginTop: '20px'
};

export default EmployeeLogin;