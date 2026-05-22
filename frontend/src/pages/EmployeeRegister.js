import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EmployeeRegister() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Registration Successful');

    navigate('/employee-login');
  };

  return (
    <div style={container}>

      <div style={card}>

        <h1 style={title}>
          Employee Registration
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            style={input}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            style={input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            style={input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            style={input}
          />

          <button style={button}>
            Register
          </button>

        </form>

        <Link
          to="/employee-login"
          style={link}
        >
          Already have account? Login
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

export default EmployeeRegister;