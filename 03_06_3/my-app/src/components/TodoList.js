import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (indexToDelete) => { 
        setTasks(tasks.filter((_, i) => i !== indexToDelete));
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>📝 To-Do List</h2>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: '5px', width: '70%' }}
      />
      <button onClick={handleAddTask} style={{ marginLeft: '10px', width : '80px', height: '25px', color:'blue', background : 'pink', boxShadow : '-3px -3px #999' }}>
        Add
      </button>

      {tasks.length === 0 ? (
        <p style={{ marginTop: '20px' }}>No tasks yet.</p>
      ) : (
        <ul style={{ marginTop: '20px' }}>
          {tasks.map((task, index) => (
            <li key={index}>✅ {task} <span><button onClick={() => handleDeleteTask(index)} style={{ marginLeft: '20px', width : '80px', height: '25px', color:'white', background : 'red', boxShadow : '-3px -3px #999' }}>
        Delete
      </button></span></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
