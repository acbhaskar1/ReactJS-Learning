import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, i) => i !== indexToDelete));
  };

  return (
    <React.Fragment>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
        <h2>📝 To-Do List</h2>

        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: "5px", width: "70%" }}
        />
        <button
          onClick={handleAddTask}
          style={{
            marginLeft: "10px",
            width: "80px",
            height: "25px",
            color: "blue",
            background: "pink",
            boxShadow: "-3px -3px #999",
          }}
        >
          Add
        </button>

        {tasks.length === 0 ? (
          <p style={{ marginTop: "20px",width: "100%", fontWeight: "bolder" }}>No tasks yet.</p>
        ) : (
          <table style={{ marginTop: "50px" }}>
            <tr>
              <th style={{ width: "85%", fontWeight: "bolder" }}>
                Name of the Task
              </th>
              <th style={{ width: "15%", fontWeight: "bolder" }}>Action</th>
            </tr>

            {tasks.map((task, index) => (
              <tr>
                <td style={{ width: "85%" }} key={index}>
                  ✅ {task}{" "}
                </td>
                <td style={{ width: "15%" }}>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    style={{
                      marginLeft: "5px",
                      height: "25px",
                      color: "white",
                      background: "red",
                      boxShadow: "-3px -3px #999",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </React.Fragment>
  );
}

export default TodoList;
