import React, { useState } from 'react';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const addTask = () => {
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title
    };

    setTasks([...tasks, newTask]);
    setTitle('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #0f172a, #1e1b4b, #312e81)',
        padding: '40px',
        color: 'white'
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: 'auto'
        }}
      >
        <h1
          style={{
            fontSize: '40px',
            marginBottom: '10px'
          }}
        >
          Task Manager
        </h1>

        <p
          style={{
            color: '#cbd5e1',
            marginBottom: '30px'
          }}
        >
          Organize your daily work efficiently
        </p>

        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '30px'
          }}
        >
          <input
            type="text"
            placeholder="Enter your task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              flex: 1,
              padding: '15px',
              borderRadius: '12px',
              border: 'none',
              outline: 'none',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              fontSize: '16px',
              backdropFilter: 'blur(10px)'
            }}
          />

          <button
            onClick={addTask}
            style={{
              padding: '15px 25px',
              borderRadius: '12px',
              border: 'none',
              background: '#6366f1',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Add
          </button>
        </div>

        {tasks.length === 0 ? (
          <div
            style={{
              background: 'rgba(255,255,255,0.08)',
              padding: '30px',
              borderRadius: '20px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3>No Tasks Yet</h3>

            <p style={{ color: '#cbd5e1' }}>
              Add your first task to begin.
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '20px',
                borderRadius: '18px',
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
              }}
            >
              <h3>{task.title}</h3>

              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  background: '#ef4444',
                  border: 'none',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;