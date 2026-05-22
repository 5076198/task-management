import React, { useState } from 'react';

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const addTask = () => {

    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setTitle('');
  };

  const toggleComplete = (id) => {

    setTasks(
      tasks.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );
  };

  return (
    <div style={container}>

      <h1 style={heading}>
        Team Task Dashboard
      </h1>

      <div style={topCard}>

        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={input}
        />

        <button
          onClick={addTask}
          style={button}
        >
          Add Task
        </button>

      </div>

      <div style={taskGrid}>

        <div style={taskCard}>
          <h2>Pending Tasks</h2>

          {tasks
            .filter(task => !task.completed)
            .map(task => (

              <div
                key={task.id}
                style={taskItem}
              >
                <p>{task.title}</p>

                <button
                  onClick={() =>
                    toggleComplete(task.id)
                  }
                  style={completeButton}
                >
                  Complete
                </button>

              </div>

            ))}
        </div>

        <div style={taskCard}>
          <h2>Completed Tasks</h2>

          {tasks
            .filter(task => task.completed)
            .map(task => (

              <div
                key={task.id}
                style={completedTask}
              >
                <p>{task.title}</p>
              </div>

            ))}
        </div>

      </div>

    </div>
  );
}

const container = {
  minHeight: '100vh',
  padding: '40px',
  background:
    'linear-gradient(135deg,#0f172a,#1e1b4b,#312e81)',
  color: 'white'
};

const heading = {
  marginBottom: '30px'
};

const topCard = {
  display: 'flex',
  gap: '10px',
  marginBottom: '30px'
};

const input = {
  flex: 1,
  padding: '14px',
  borderRadius: '10px',
  border: 'none',
  outline: 'none'
};

const button = {
  padding: '14px 20px',
  border: 'none',
  borderRadius: '10px',
  background: '#6366f1',
  color: 'white',
  cursor: 'pointer'
};

const taskGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px'
};

const taskCard = {
  background: 'rgba(255,255,255,0.1)',
  padding: '20px',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)'
};

const taskItem = {
  background: 'rgba(255,255,255,0.08)',
  padding: '15px',
  borderRadius: '10px',
  marginTop: '15px'
};

const completedTask = {
  background: '#16a34a',
  padding: '15px',
  borderRadius: '10px',
  marginTop: '15px'
};

const completeButton = {
  marginTop: '10px',
  padding: '8px 12px',
  border: 'none',
  borderRadius: '8px',
  background: '#22c55e',
  color: 'white',
  cursor: 'pointer'
};

export default Dashboard;