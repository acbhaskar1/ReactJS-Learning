import React from "react";

export default function TaskItem({ task, onDelete }) {
  return (
    <>
      <li>{task}</li>
      <button
        onClick={onDelete}
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
    </>
  );
}
