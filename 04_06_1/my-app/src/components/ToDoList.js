import React from 'react'
import {useState} from 'react'
import AddTask from './AddTask'
import TaskItem from './TaskItem'

export default function ToDoList() { 
  const [tasks, setData] = useState([])
  const handleAddTask = (newData) =>{
    setData([...tasks, newData])
  }
  const handleDeleteTask = (index) =>{
    setData(tasks.filter((_, i) => i !== index));
  }
     
  return (
    <>
      <AddTask onAdd={handleAddTask}/>
      
      {tasks.length <= 0 ? (
        <p style={{ fontWeight: "bolder", width: "100%", textAlign: "center" }}>
          No Data
        </p>
      ) : (
        <table style={{ marginTop: "50px" }}>
            <tr>
              <th style={{ width: "70%", fontWeight: "bolder" }}>
                Name of the Task
              </th>
              <th style={{ width: "15%", fontWeight: "bolder" }}>Action</th>
            </tr>

            {tasks.map((task, index) => (
              <TaskItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />              
            ))}
          </table>
      )}
        
         
    </>
  )
}
